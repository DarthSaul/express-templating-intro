const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.render(`home`);
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const cities = ['New York City', 'Pittsburgh', 'Madrid', 'Tamarindo'];
    res.render('subreddit', { subreddit, cities });
});


app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080');
});