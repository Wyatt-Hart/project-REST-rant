const router = require('express').Router()
const res = require('express/lib/response')
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
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

//SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]){
        res.render('error404')
    }
    else{
        res.render('places/show', { place: places[id], id })
    }
})

//DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]){
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

// GET /places
router.get('/', (req,res) => {
    res.render('places/index', {places})
})

module.exports = router
