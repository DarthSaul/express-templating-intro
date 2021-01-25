const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
console.log(redditData)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render(`home`);
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', { ...data })
});

app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080');
});