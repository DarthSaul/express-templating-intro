const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render(`home`, { name: 'Home Page' });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    return data 
        ? res.render('subreddit', { ...data }) 
        : res.render('notfound', { subreddit, name: 'Home Page' });
});

app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080');
});