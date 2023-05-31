// import required packages
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();


// create a route for the app
app.get('/', (req, res) => {
  res.send('home route on https');
});

// another route
app.get('/test', (req, res) => {
  res.send('test route on https');
});



const httpsServer = https.createServer({
  key: fs.readFileSync('./localhost+2-key.pem'),
  cert: fs.readFileSync('./localhost+2.pem'),
}, app);


httpsServer.listen(8000, () => {
    console.log('HTTPS Server running on port https://localhost:8000');
});