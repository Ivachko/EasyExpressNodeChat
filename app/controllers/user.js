const express = require('express')
const router = express.Router()
module.exports = (app) => {
  app.use('/', router)
}
/**
 * Display the registration form
 */
router.get('/signin', (req, res, next) => {
  res.render('user/signin', {
    title: 'Inscription'
  })
})
router.post('/signin', (req, res, next) => {
})
