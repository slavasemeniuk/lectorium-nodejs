const express = require('express')
const compression = require('compression')
const apiRoutes = require('./api-routes/routes')

var app = express()
const port = 3000

app.use(express.json())
app.use(compression())
app.use(apiRoutes)

app.listen(port, () => console.log(`Listening on port ${port}!`))

module.exports = app
