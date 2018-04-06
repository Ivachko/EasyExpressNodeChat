const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('passport')
const session = require('express-session')
module.exports = (app) => {
  app.use('/', router)
  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }))
  app.use(passport.initialize())
  app.use(passport.session()) // persistent login sessions
}

router.get('/', (req, res, next) => {
  console.log(req.originalUrl)
  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: 'Login',
      articles: articles
    })
  })
})

router.post('/', (req, res, next) => {
  db.User.findOne({
    where: {
      mail: req.body.user.email
    }
  }).then((user) => {
    if (user) {
      if (user.password === req.body.user.password) {
        req.session.user = user.id
        res.render('user/home')
      } else {
        console.log('error login')
      }
    } else {
      console.log('user inexsitant')
    }
  })
})
