console.log('test algo');
const ratings = [
    {
        id: 7,
        score: '5',
        comment: 'clean',
        restaurantId: 18,
        preferenceId: 1,
        userId: 4,
        user: {
            id: 4,
            username: 'alex',
            password:
                '$2b$05$7VdSx9wG3MFYTWX.r99W0.gO29rpEnffCNKwVkhglHtuRlRGJrlbS',
        },
    },
    {
        id: 8,
        score: '5',
        comment: 'ser',
        restaurantId: 18,
        preferenceId: 2,
        userId: 4,
        user: {
            id: 4,
            username: 'alex',
            password:
                '$2b$05$7VdSx9wG3MFYTWX.r99W0.gO29rpEnffCNKwVkhglHtuRlRGJrlbS',
        },
    },
    {
        id: 9,
        score: '3',
        comment: 'ser',
        restaurantId: 18,
        preferenceId: 2,
        userId: 4,
        user: {
            id: 4,
            username: 'alex',
            password:
                '$2b$05$7VdSx9wG3MFYTWX.r99W0.gO29rpEnffCNKwVkhglHtuRlRGJrlbS',
        },
    },
    {
        id: 10,
        score: '3',
        comment: 'clean',
        restaurantId: 18,
        preferenceId: 1,
        userId: 4,
        user: {
            id: 4,
            username: 'alex',
            password:
                '$2b$05$7VdSx9wG3MFYTWX.r99W0.gO29rpEnffCNKwVkhglHtuRlRGJrlbS',
        },
    },
    {
        id: 11,
        score: '1',
        comment: 'auth',
        restaurantId: 18,
        preferenceId: 3,
        userId: 4,
        user: {
            id: 4,
            username: 'alex',
            password:
                '$2b$05$7VdSx9wG3MFYTWX.r99W0.gO29rpEnffCNKwVkhglHtuRlRGJrlbS',
        },
    },
];
const userpreferences = [
    {
        id: 36,
        score: 1,
        userId: 4,
        preferenceId: 4,
    },
    {
        id: 4,
        score: 5,
        userId: 4,
        preferenceId: 1,
    },
    {
        id: 16,
        score: 2,
        userId: 4,
        preferenceId: 2,
    },
    {
        id: 26,
        score: 1,
        userId: 4,
        preferenceId: 3,
    },
    {
        id: 46,
        score: 1,
        userId: 4,
        preferenceId: 5,
    },
];

const scoreWeightedFunction = (userpreferences, ratings) => {
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

    // return { denominator, numberator, answer: numberator / denominator };
    return numberator / denominator;
};

// console.log('Result', scoreWeightedFunction(userpreferences, ratings));
