//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))


// GET /places
app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)