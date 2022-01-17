const router = require('express').Router()
const places = require('../models/places.js')

// GET /places/new
router.get('/new', (req,res) =>{
    res.render('places/new')
})

// POST /places/new
router.post('/', (req, res) =>{
    if(!req.body.pic){
        req.body.pic = 'http://placekitten.com/428/285'
    }
    if(!req.body.city){
        req.body.city = 'Anytown'
    }
    if(!req.body.state){
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

// GET /places
router.get('/', (req,res) => {
    res.render('places/index', {places})
})

module.exports = router
