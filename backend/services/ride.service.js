const rideModel = require('../models/ride.model');
const mapsService = require('./maps.service')

async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error('Pickup and destination are required')
    }

    const distance = await mapsService.getDistanceTime(pickup, destination);
    const baseFare = {
        auto: 20,
        car: 50,
        motorcycle: 15
    };

    const perKmRate = {
        auto: 10,
        car: 20,
        motorcycle: 8
    };

    const fare = {
        auto: baseFare.auto + (distance.km * perKmRate.auto),
        car: baseFare.car + (distance.km * perKmRate.car),
        motorcycle: baseFare.motorcycle + (distance.km * perKmRate.motorcycle)
    };

    return fare;
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination);

    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        fare: fare[vehicleType]
    })

    return ride;
}