const axios = require('axios');

// const catgories = ['steak', 'fish', 'chicken', 'dessert', 'eggs'];

// async function fetchCategories(alias) {
//     let response = await axios.get(
//         `https://api.yelp.com/v3/categories/hotdogs`,
//         {
//             headers: {
//                 Authorization:
//                     'Bearer Op-Df4Amy-Y9FlUy0ELcRLDqCAkQ0NF5t2s-4SPIvNDG1-Jnjh_j4pRGoB07upa_SN5cl7PxV2cfCx99YXJpIJT0O4-lWbLeIqrytRqAEpu4H1GRIpF6enAtTe0oY3Yx',
//             },
//         }
//     );
//     console.log(response.data);
// }

async function fetchFacetSearchData() {
    let response = await axios.get(
        `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=40.735132&longitude=-74.002014`,
        {
            headers: {
                Authorization:
                    'Bearer Op-Df4Amy-Y9FlUy0ELcRLDqCAkQ0NF5t2s-4SPIvNDG1-Jnjh_j4pRGoB07upa_SN5cl7PxV2cfCx99YXJpIJT0O4-lWbLeIqrytRqAEpu4H1GRIpF6enAtTe0oY3Yx',
            },
        }
    );
    console.log(response.data);
}

// catgories.forEach((alias) => fetchCategories(alias));
// fetchCategories();
fetchFacetSearchData();
