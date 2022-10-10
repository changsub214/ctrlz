var express = require('express');
var mysql = require('mysql');
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
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signUp',function(req,res){
  var email = req.body.email;
  var name = req.body.name;
  var sql = {email:email, name:name};
  var query = connection.query('select email from emails where email = "'+email+'"',function(err,row){
    if(row[0]==undefined){
      connection.query('insert into emails set ?',sql,function(err,rows){
        if(err){throw err;}
      });
      res.json({
        success: true,
        message: 'Success!'
      })
    }
    else{
      res.json({
        success: false,
        message:'Failed, Please use another Email'
      })
    }
  })
});
router.post('/loginCheck',function(req,res){
  var email = req.body.email;
  var query = connection.query('select email from emails where email = "'+email+'"',function(err,row){
    if(row[0]==undefined){
      res.json({
        success: false,
        message: 'Email Error!'
      })
    }
    else{
      res.json({
        success: true,
        message: 'Login Success',
        name: row[0].name
      })
    }
  })
})

module.exports = router;
