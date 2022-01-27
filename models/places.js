const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name:       {type: String, required: true},
    pic:        String,
    cuisines:   {type: String, required: true},
    city:       {type: String, default: 'Anytown'},
    state:      {type: String, required: true},
    founded:    Number,
    website:    String
})
module.exports = mongoose.model('Place', placeSchema)

/* module.exports = [
    {
        name: "Socrates' Falafelry",
        city: 'Brooklyn',
        state: 'NY',
        cuisines: 'Greek Bistro',
        pic: '/images/gyro.jpg',
        website: 'https://www.google.com/search?q=Socrates+Falafelry'
    }, {
        name: 'Zer0 Day Lattes',
        city: 'Portland',
        state: 'OR',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg',
        website: 'https://wyatt-hart.github.io/Restaurant-Menu/index.html'
    }
] */