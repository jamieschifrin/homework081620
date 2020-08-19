const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const blog = require('./models/blog');
const Blog = require('./models/blog');


// express app
const app = express();
// connect to database
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.dnj4v.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));



// app.set('views', 'myviews');
app.set('view engine', 'ejs');
// middleware and static files

app.use(express.static('public'))
app.use(morgan('dev'));
// register view engine

// mongoose and mongo sandbox routes


app.get('/', (req, res) => {
  res.redirect('/blogs');
});



app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req,res) => {
  Blog.find().sort({createdAt: -1})
  .then((then) => {
    res.render('index', {blogs: result , title: 'All Blogs'  })
  })
  .catch((err) => {
    console.log(err);
  })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
