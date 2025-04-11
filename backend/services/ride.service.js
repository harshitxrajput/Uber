const rideModel = require('../models/ride.model');
const crypto = require('crypto');

const mapsService = require('./maps.service')

async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error('Pickup and destination are required')
    }

    const distanceTime = await mapsService.getDistanceTime(pickup, destination);
    const baseFare = {
        auto: 20,
        car: 50,
        moto: 15
    };

    const perKmRate = {
        auto: 10,
        car: 20,
        moto: 8
    };

    const perMinRate = {
        auto: 1,
        car: 2,
        moto: 0.5
    };

    const fare = {
        auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + (distanceTime.duration.value / 60 * perMinRate.auto),
        car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + (distanceTime.duration.value / 60 * perMinRate.car),
        moto: baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + (distanceTime.duration.value / 60 * perMinRate.moto)
    };

    return fare;
}

function getOTP(num){
    function generateOTP(num) {
        if (!num || num <= 0) {
            throw new Error('Number of digits must be greater than 0');
        }
        const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, '0');
        return otp;
    }

    return generateOTP(num);
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
        otp: getOTP(4),
        fare: fare[vehicleType]
    })

    return ride;
}