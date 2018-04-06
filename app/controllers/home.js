const express = require('express')
const router = express.Router()
const db = require('../models')
const util = require('util')
var session = require('express-session')
module.exports = (app) => {
  app.use('/', router)
  app.use(session({
    secret: 'userSession',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
}

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: 'Login',
      articles: articles
    })
  })
})
router.post('/', (req, res) => {
  db.User.findOne({
    where: {
      mail: req.body.user.email
    }
  }).then((user) => {
    if (user) {
      console.log(util.inspect(user))
      if (user.password === req.body.user.password) {
        console.log('ok')
        if (!req.session.user) {
          req.session.user = {}
        }
        req.session.user['mail'] = user.mail
        console.log(util.inspect(req.session.user))
      } else {
        console.log('error login')
      }
    } else {
      console.log('user inexsitant')
    }
  })
})
