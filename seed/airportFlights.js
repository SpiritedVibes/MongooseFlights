const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const airports = [
    {
        name: `Los Angeles International Airport`,
        location: `Los Angeles, CA`,
        code: `LAX`
    },
    {
        name: `John F. Kennedy International Airport`,
        location: `New York City, NY`,
        code: `JFK`
    },
    {
        name: `San Franciso International Airport`,
        location: `San Francisco, CA`,
        code: `SFO`
    },
    {
        name: `LaGuardia Airport`,
        location: `New York City, NY`,
        code: `LGA`
    },
   
]

const main = async () => {

const flights = [    // I told Chat GPT to come up with random flights with corresponding airports with the data that is needed at random
    {
      airline: 'American Airlines',
      flightNumber: 1001,
      price: 320.50,
      numberOfSeats: 180,
      departingAirport: LAX[0]._id, // Los Angeles to JFK
      arrivalAirport: JFK[0]._id,
      departureDateTime: new Date(2024, 9, 15, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 15, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    },
    {
      airline: 'Delta Airlines',
      flightNumber: 1002,
      price: 250.75,
      numberOfSeats: 150,
      departingAirport: JFK[0]._id, // JFK to SFO
      arrivalAirport: SFO[0]._id,
      departureDateTime: new Date(2024, 9, 16, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 16, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    },
    {
      airline: 'United Airlines',
      flightNumber: 1003,
      price: 375.20,
      numberOfSeats: 200,
      departingAirport: SFO[0]._id, // SFO to LAX
      arrivalAirport: LAX[0]._id,
      departureDateTime: new Date(2024, 9, 17, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 17, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    },
    {
      airline: 'Southwest Airlines',
      flightNumber: 1004,
      price: 180.30,
      numberOfSeats: 175,
      departingAirport: LGA[0]._id, // LGA to JFK
      arrivalAirport: JFK[0]._id,
      departureDateTime: new Date(2024, 9, 18, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 18, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    },
    {
      airline: 'JetBlue',
      flightNumber: 1005,
      price: 210.45,
      numberOfSeats: 140,
      departingAirport: JFK[0]._id, // JFK to LAX
      arrivalAirport: LAX[0]._id,
      departureDateTime: new Date(2024, 9, 19, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 19, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    },
    {
      airline: 'Spirit Airlines',
      flightNumber: 1006,
      price: 199.99,
      numberOfSeats: 160,
      departingAirport: LAX[0]._id, // LAX to SFO
      arrivalAirport: SFO[0]._id,
      departureDateTime: new Date(2024, 9, 20, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 20, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    },
    {
      airline: 'Alaska Airlines',
      flightNumber: 1007,
      price: 295.00,
      numberOfSeats: 190,
      departingAirport: SFO[0]._id, // SFO to LGA
      arrivalAirport: LGA[0]._id,
      departureDateTime: new Date(2024, 9, 21, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      arrivalDateTime: new Date(2024, 9, 21, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString()
    }
  ];
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()