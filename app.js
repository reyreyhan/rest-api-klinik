const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const app = express()

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

require('./server/routes')(app)
app.all('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port, () => console.log('App Deploy At Port ' , port , ' !!'))

module.exports = app