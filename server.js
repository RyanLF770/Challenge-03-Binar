const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/cars.html');
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});