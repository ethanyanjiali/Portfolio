var express = require('express');
var router = express.Router();
var Info = require("../model/info.js");

router.get('/like', function(req, res) {
    Info.findOne({infoName:"general"},function(err, info){
      if(err) throw err;
      if(info == null){
        console.log("new info");
        info = new Info();
        info.likes = 1;
        info.infoName = "general";
        info.save(function(){
          res.json({
            likes : info.like
          });
        })
      } else {
        console.log(info.likes);
        info.likes = info.likes + 1;
        info.save(function(){
          res.json({
            likes : info.likes
          });
        })
      }
    });
})

/* GET app structure and Home page */
router.get('/', function(req, res) {
  Info.findOne({infoName:"general"},function(err, info){
    res.render('index', { redirect: 'home', likes: info.likes });
  });
}); 
router.post('/home', function(req, res) {
  	res.render('home');
}); 


router.post('/about', function(req, res) {
  	res.render('about');
}); 
router.get('/about', function(req, res) {
  Info.findOne({infoName:"general"},function(err, info){
    res.render('index', { redirect: 'about', likes: info.likes });
  });
}); 


router.post('/projects', function(req, res) {
  	res.render('projects');
}); 
router.get('/projects', function(req, res) {
    Info.findOne({infoName:"general"},function(err, info){
      res.render('index', { redirect: 'projects', likes: info.likes });
    });
});


router.post('/skills', function(req, res) {
  	res.render('skills');
}); 
router.get('/skills', function(req, res) {
    Info.findOne({infoName:"general"},function(err, info){
      res.render('index', { redirect: 'skills', likes: info.likes });
    });
}); 




module.exports = router;
