const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name:       {type: String, required: true},
    pic:        {type: String, default: 'http://placekitten.com/428/285'},
    cuisines:   {type: String, required: true},
    city:       {type: String, default: 'Anytown'},
    state:      {type: String, required: true},
    founded:    {
                    type: Number,
                    min: [1673, 'Invalid Year Entered: Value too low'],
                    max: [new Date().getFullYear(), 'Invalid year entered: Enter a year before ' + (new Date().getFullYear())]
                },
    website:    String
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)