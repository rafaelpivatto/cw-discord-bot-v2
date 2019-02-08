// dev-server.js
const express = require('express');
const app = express();
const path = require('path');
global.appRoot = path.resolve(__dirname);

app.set('port', 5000);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});

app.use(express.static('dist'));

//To load index on server
app.get('/', function (req, res) {
    res.sendFile(`${global.appRoot}/index.html`);
});