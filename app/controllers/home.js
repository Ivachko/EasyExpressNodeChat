const express = require('express');
const router = express.Router();
const db = require('../models');
const util= require('util')
const morgan = require('morgan')
var logger = morgan('conbined')
module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });  
  });
});
router.post('/',(req,res)=>{
  db.User.findOne({
    where: {
      mail : req.body.user.email
    }
  }).then((user)=>{
    if(user){
    console.log(util.inspect(user))
    if(user.password == req.body.user.password){
      console.log("ok")
    }else{
      console.log("ntm")
    }
  }else{
    console.log("user inexsitant");
  }
  })
})
