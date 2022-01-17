const router = require('express').Router()

// GET /places/new
router.get('/new', (req,res) =>{
    res.render('places/new')
})

// GET /places
router.get('/', (req,res) => {
    let places = [
        {
            name: "Socrates' Falafelry",
            city: 'Brooklyn',
            state: 'NY',
            cuisines: 'Greek Bistro',
            pic: '/images/gyro.jpg'
        }, {
            name: 'Zer0 Day Lattes',
            city: 'Portland',
            state: 'OR',
            cuisines: 'Coffee, Bakery',
            pic: '/images/coffee.jpg'
        }
    ]
    res.render('places/index', {places})
})

module.exports = router
