const data = require('./test.json');

const businesses = data.businesses;

const businessForDB = businesses.map((business) => {
    const {
        price,
        rating,
        name,
        alias,
        image_url,
        location,
        phone,
        coordinates,
    } = business;
    return {
        name,
        alias,
        imgUrl: image_url,
        address: location.address1,
        city: location.city,
        state: location.state,
        zipCode: location.zip_code,
        phone,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        price,
        rating,
    };
});

module.exports = businessForDB;
