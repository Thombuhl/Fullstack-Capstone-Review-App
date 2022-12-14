const { db } = require('./db');
const app = require('./app');
const seed = require('../script/seed');

const init = async () => {
    try {
        if (process.env.SEED === 'true') {
            await seed();
        } else {
            await db.sync();
        }
        // start listening (and create a 'server' object representing our server)
        app.listen(process.env.PORT || 8080, () =>
            console.log(`Mixing it up on port `)
        );
    } catch (ex) {
        console.log(ex);
    }
};

init();
