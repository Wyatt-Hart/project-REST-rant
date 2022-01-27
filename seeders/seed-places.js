const db = require('../models')

console.log('[Seeder] seeding db.places ...')

db.Place.create([{
    name: "Socrates' Falafelry",
    city:"Brooklyn",
    state: "NY",
    cuisines:"Greek Bistro",
    pic:"http://localhost:3000/images/gyro.jpg",
    website: "https://www.google.com/search?q=Socrates' Falafelry",
    founded: 1992
},{
    name: "Zer0 Day Lattes",
    city:"Portland",
    state: "OR",
    cuisines:"Coffee, Bakery",
    pic: "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1455&q=80",
    website:"https://wyatt-hart.github.io/Restaurant-Menu/index.html",
    founded: 1997
}])
    .then(() => {
        console.log('[Seeder] Successfully seeded db.places')
        process.exit()
    })
    .catch(() =>{
        console.log('[Seeder] Failure! Unable to seed db.places', err)
        process.exit()
    })