export const scoreWeighted = (userpreferences, ratings, decVal = 2) => {
    let denominator = 0;
    let numberator = 0;
    ratings.forEach((rating) => {
        userpreferences.forEach((pref) => {
            if (pref.preferenceId === rating.preferenceId) {
                denominator = pref.score + denominator;
                numberator = pref.score * (rating.score * 1) + numberator;
            }
        });
    });
    const score = numberator / denominator;
    if (isNaN(score)) {
        return null;
    }
    return parseFloat(score).toFixed(decVal);
};

export const regularScore = (ratingsForRestaurant, decVal = 2) => {
    let numberator = 0;
    ratingsForRestaurant.forEach((rating) => {
        numberator += rating.score * 1;
    });
    const score = numberator / ratingsForRestaurant.length;
    // console.log(score);
    if (isNaN(score)) {
        return null;
    }
    return parseFloat(score).toFixed(decVal);
};

export const bestFeature = (ratingsForRestaurant) => {
    const ratingByPref = [];
    for (let i = 0; i < 5; i++) {
        const filtered = ratingsForRestaurant.filter(
            (rating) => rating.preferenceId === i + 1
        );
        ratingByPref.push(filtered);
    }
    // console.log(ratingByPref);
    let favPref = { preference: null, ratings: 0 };
    ratingByPref?.forEach((ratings) => {
        if (ratings.length > favPref.ratings) {
            favPref.ratings = ratings.length;
            favPref.preference = ratings[0].preference.name;
            favPref.id = ratings[0].preferenceId;
        }
    });
    return favPref;
};
