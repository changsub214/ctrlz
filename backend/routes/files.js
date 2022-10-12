var express = require('express');
const multer = require('multer');
var router = express.Router();
var app = express();

app.use(express.json())

const upload= multer({
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null,'public/img')
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname)
            done(null,ext)
        }
    })
})

router.post('/upload',upload.single('image',(res,res)=>{
    res.send('OK')
})
)

module.exports = router;