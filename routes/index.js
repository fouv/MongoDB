var express = require('express');
var router = express.Router();

var ArticleModel = require('../models/articles');
var userModel = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks', { title: 'Express' });
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages', { title: 'Express' });
});



/* GET Messages page. */
router.get('/users-page', function(req, res, next) {

  userModel.find(function(err,users){
    console.log(users)
    res.render('users', {users});
  })
});




/* GET Messages page. */
router.get('/catalog-page', function(req, res, next) {

  ArticleModel.find(function(err,articles){
    console.log(articles)
    res.render('catalog', {articles});
  })
});

/* GET Messages page. */
router.get('/orders-list-page', function(req, res, next) {
  res.render('orders-list', { title: 'Express' });
});

/* GET Messages page. */
router.get('/order-page', function(req, res, next) {
  res.render('order', { title: 'Express' });
});



module.exports = router;
