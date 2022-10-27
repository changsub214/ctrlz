var express = require('express');
var path = require('path');
var mysql = require('mysql');
const multer = require('multer');
var router = express.Router();
var app = express();
const fs = require('fs');
const { CONNREFUSED } = require('dns');

app.use(express.json())

var connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user:'root',
    password:'password',
    database:'users'
  });
  connection.connect(function(err) {
    if(err){
      console.error('mysql connection error');
      console.error(err);
      throw err;
    }
  });

try{
    fs.readdirSync('uploads');
} catch(err){
    console.log('MAKE DIR');
    fs.mkdirSync('uploads');
}

const upload= multer({
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/')
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname)
            done(null,path.basename(file.originalname,ext)+Date.now()+ext);
        }
    })
})

router.post('/upload',upload.single('image'),(req,res)=>{
    var sql = {email:req.body.email,filename:req.body.name,filepath:req.file.path};
    var query = connection.query('insert into images set ?',sql,function(err,rows){
      if(err){throw err}
      console.log(rows)
    })
    console.log(req.body.email);
    console.log(req.body.name)
    res.send(req.file)
  })
router.get('/getImage',(req,res)=>{
  console.log('getImage')
  var query = connection.query('select filepath,filename from images where email ="'+req.query.email+'"',function(err,row){
    if(err) throw err;
    res.send(row)
    console.log(row)
  })
})
router.post('/deleteImage',(req,res)=>{
  fs.unlink(req.body.filepath,(err)=>{
    if(err) throw err;
  })
  console.log(req.body.email,req.body.filepath)
  const query = connection.query('delete from images where email = "'+req.body.email+'"and filepath = "'+req.body.filepath+'"',function(err){
    if(err) throw err;
  })
})
module.exports = router;