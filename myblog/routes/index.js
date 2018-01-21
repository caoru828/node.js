var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express222',
        title1: 'title2'
    });
});
router.get('/login', function(req, res, next) {
    res.render('login');
});
router.post('/login', function(req, res, next) {
    var uname = req.body.uname;
    var pwd = req.body.pwd;
    // res.send(name)
    if(uname=='li' && pwd=='11'){
        res.render('index',{
          name:uname
        });
    }
});

router.get('/reg', function(req, res, next) {
    res.render('register');
});

router.get('/register', function(req, res, next) {
    var name = req.query.name;
    var pwd  = req.query.pwd1;
    var pwd2  = req.query.pwd2;
    // res.send(name)
    // if(pwd != pwd2){
    //     res.send('pwd-error')
    // }else{
    //     res.send('success')
    // }


    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'newblog'
    });

    connection.connect();


    var sql = `insert into t_user(username,password) values('${name}','${pwd}')`;
    // var sql = `select * from t_user`;
    connection.query(sql, function (error, results) {
        if (error) throw error;
        res.send(results);
        connection.end();
    });

});


  module.exports = router;