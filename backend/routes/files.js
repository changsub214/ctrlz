var express = require('express');
var path = require('path');
const multer = require('multer');
var router = express.Router();
var app = express();
const fs = require('fs');

app.use(express.json())

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
    console.log(req.file,req.body);
    res.send('OK')
  })

module.exports = router;