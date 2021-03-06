// dev-server.js
const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')

global.appRoot = path.resolve(__dirname, '../../')

app.set('port', process.env.PORT || 5000)

// Middlewares
app.use(helmet())
app.use('/src/', express.static(`${global.appRoot}/dist`))

app.listen(app.get('port'), () => {
  console.log(`Application has started on port ${app.get('port')}`)
})

// To load index on server
app.get('/', function (req, res) {
  res.sendFile(`${global.appRoot}/dist/index.html`)
})
