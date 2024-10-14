const mongoose = require('mongoose')

mongoose.connect('`mongodb+srv://SpiritedVibes:GothicRaven3@cluster0.pqgyz.mongodb.net/flightsDatabase?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Successfully connected to Database')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
module.exports = db