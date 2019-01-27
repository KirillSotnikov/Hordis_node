var express = require('express');   

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about-us', function(req, res){
    res.render('about-us');
});
app.get('/all-news', function(req, res){
    res.render('all-news');
});
app.get('/category', function(req, res){
    res.render('category');
});
app.get('/contact', function(req, res){
    res.render('contact');
});
app.get('/gallery', function(req, res){
    res.render('gallery');
});
app.get('/news', function(req, res){
    res.render('news');
});
app.get('/pod-category', function(req, res){
    res.render('pod-category');
});
app.get('/stock', function(req, res){
    res.render('stock');
});
app.get('/tovar', function(req, res){
    res.render('tovar');
});


app.listen(3000);