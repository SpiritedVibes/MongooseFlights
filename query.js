const db = require('./db')
const { Airport, Flight } = require('./models')

const allFlights = async () => {
    const flights = await Flight.find()
    console.log('All Flights:', flights)
}

const allFlightsAirports = async () => {
    const flights = await Flight.find()
    const airports = await Airport.find()
}

const findFlights = async () => {
    const flight = await flight.findOne()
    console.log("Flight Found:", )
  }
  
  
  const createFlight = async () => {
    const flight = await Flight.findOne()
  
  }
  
  
  const updateFlight = async () => {
    const updatedFlight = await Flight.findOneAndUpdate(
      {  },// what you are adding to
      { $set: {  } },// what are you adding
      { new: true, upsert: false } // makes sure that new document is not made
    );
  
    if (updatedFlight) {
      console.log("Flight Updated:", updatedFlight);
    } else {
      console.log("No Flight found with the given condition.")
    }
  }
  
  
  const deleteFlight = async () => {
    let deleted = await Flight.deleteOne({})//what are you deleting
    console.log("Deleted Flight:", deleted)
  }
  
  
  const findAirport = async () => {
      const airport = await airport.findOne()
      console.log("airport Found:", )
    }
    
    
    const createAirport = async () => {
      const airport = await Airport.findOne()
    
    }
    
    
    const updateAirport = async () => {
      const updatedAirport = await Airport.findOneAndUpdate(
        {  },// what you are adding to
        { $set: {  } },// what are you adding
        { new: true, upsert: false } // makes sure that new document is not made
      )
    
      if (updatedAirport) {
        console.log("Airport Updated:", updatedAirport);
      } else {
        console.log("No Airport found with the given condition.")
      }
    }
    
    
    const deleteAirport = async () => {
      let deleted = await Airport.deleteOne({})//what are you deleting
      console.log("Deleted Airport:", deleted)
    }
    
  
  async function main() {
    try {
      
      // await findFlight()
      // await createAirport()
      // await createFlight()
      //updateFlight()
       // await updateAirport()
      // await deleteAirport()
    } catch (error) {
      console.log("Error:", error)
    } finally {
      await db.close()
    }
  }
  
  main()
  