const data = require('./test.json');

const businesses = data.businesses;

const businessForDB = businesses.map((business) => {
    const { name, alias, image_url, location, phone } = business;
    return {
        name,
        alias,
        imgUrl: image_url,
        address: location.address1,
        city: location.city,
        state: location.state,
        zipCode: location.zip_code,
        phone,
    };
});

module.exports = businessForDB;
