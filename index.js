const express = require('express');
const app = express();

// Test connection
app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1>`);
});

// Connect to port 8080
app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080');
});