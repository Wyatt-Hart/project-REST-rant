const router = require('express').Router()
const res = require('express/lib/response')
const places = require('../models/places.js')
const db = require('../models')

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
    if(!req.body.website){
        req.body.website = 'https://www.google.com/search?q=' + req.body.name
    }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

//EDIT
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]){
        res.render('error404')
    }
    else{
        res.render('places/edit', { place: places[id], id })
    }
})

//PUT
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
        if(!req.body.pic){
            req.body.pic = 'http://placekitten.com/428/285'
        }
        if(!req.body.city){
            req.body.city = 'Anytown'
        }
        if(!req.body.state){
            req.body.state = 'USA'
        }
        if(!req.body.website){
            req.body.website = 'https://www.google.com/search?q=' + req.body.name
        }
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

//SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

//DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    /* let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]){
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    } */
})

// GET /places
router.get('/', (req,res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

module.exports = router
