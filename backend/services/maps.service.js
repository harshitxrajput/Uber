const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error("Unable to fetch coordinates");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error("Origin and Destination are required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    
    try {
        const response = await axios.get(url, {
            validateStatus: (status) => status >= 200 && status < 300,
            timeout: 5000,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.data.status !== 'OK') {
            throw new Error(`Google API error: ${response.data.status}`);
        }

        const element = response.data.rows[0].elements[0];

        if (["ZERO_RESULTS", "NOT_FOUND"].includes(element.status)) {
            throw new Error("Route not found or invalid location");
        }

        return {
            distance: element.distance.text,
            duration: element.duration.text,
            distanceValue: element.distance.value,
            durationValue: element.duration.value
        };

    } catch (error) {
        console.error('Distance Matrix API Error:', error.message);
        throw new Error("Failed to calculate route");
    }
}


module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input){
        throw new Error("Query is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            return response.data.predictions;
        } else {
            throw new Error("Unable to fetch Suggestions");
        }

    } catch(error){
        console.error(error);
        throw error;
    }

}