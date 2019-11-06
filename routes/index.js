var express = require('express');
var router = express.Router();

var ArticleModel = require('../models/articles');
var userModel = require('../models/users');
var OrderModel = require('../models/orders');
var TaskModel = require('../models/task');
var MessageModel = require('../models/messages');

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

    userModel.find(function(err, users) {

        res.render('users', { users });
    })
});

/* GET Messages page. */
router.get('/catalog-page', function(req, res, next) {

    ArticleModel.find(function(err, articles) {

        res.render('catalog', { articles });
    })
});

/* GET Messages page. */
router.get('/orders-list-page', function(req, res, next) {

    OrderModel.find(function(err, orders) {
        console.log('console log des orders ', orders)

        res.render('orders-list', { title: 'Express', orders });
    })
});


/* GET 1 order page. */
router.get('/order-page', function(req, res, next) {
    OrderModel.findById(req.query.id)
        .populate('user')
        .populate('articles')
        .exec(function(err, orders) {
            console.log('affiche titre articles', orders.articles[0].title);
            res.render('order', { orders });
        })



});





module.exports = router;