// dev-server.js
const express = require('express')
const app = express()
const path = require('path')
global.appRoot = path.resolve(__dirname, '../../')

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), () => {
  console.log(`Application has started on port ${app.get('port')}`)
})

app.use('/src/', express.static(`${global.appRoot}/dist`))

// To load index on server
app.get('/', function (req, res) {
  res.sendFile(`${global.appRoot}/dist/index.html`)
})
