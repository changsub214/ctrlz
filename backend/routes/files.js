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
          file.originalname = Buffer.from(file.originalname,'latin1').toString('utf8')
            done(null,Date.now()+file.originalname);
        }
    })
})

router.post('/upload',upload.single('image'),(req,res)=>{
    var sql = {email:req.body.email,filename:req.file.originalname,filepath:req.file.path};
    var query = connection.query('insert into images set ?',sql,function(err,rows){
      if(err){throw err}
      console.log(rows)
    })
    console.log(req.body.email)
    console.log(req.body.name)
    res.send(req.file)
  })
router.post('/uploadJSON',upload.single('txt'),(req,res)=>{
  var sql = {filename:req.body.filename,jsonname:req.file.originalname,jsonpath:req.file.path}
  var query = connection.query('insert into jsons set ?',sql,function(err,rows){
    if(err){throw err}
  })
})
router.get('/getImage',(req,res)=>{
  console.log('getImage')
  var query = connection.query('select filepath,filename from images where email ="'+req.query.email+'"',function(err,row){
    if(err) throw err;
    res.send(row)
    console.log(row)
  })
})
router.get('/getJSON',(req,res)=>{
  var query = connection.query('select jsonpath from jsons where filename = "'+req.query.filename+'"',function(err,row){
    if(err) throw err;
    res.send(row)
  })
})
router.post('/deleteImage',(req,res)=>{
  fs.unlink(req.body.filepath,(err)=>{
    if(err) throw err;
  })
  const filepath = "uploads\\"+req.body.filepath.substring(7)
  console.log("수정 된 경로:",filepath)
  const query = connection.query('delete from images where email = "'+req.body.email+'"and filepath = "'+filepath+'"',function(err){
    if(err) throw err;
    res.send("삭제 완료")
  })
})

router.post('/deleteUser',(req,res)=>{
  const query = connection.query('select filepath from images where email = "'+req.body.email+'"',function(err,row){
    if(err) throw err;
    console.log(row)
    row.foreach(f =>{
      fs.unlink(f,(err)=>{
        if(err) throw err;
      })
    })
    res.send("삭제 완료")
  })
})

router.get('/inf',function(req,res){
  connection.query('select * from images',function(err,rows){
    if(err) throw err;
    res.send(rows)
    console.log(rows)
  })
})

module.exports = router;