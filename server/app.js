const express = require('express');

//Initialize express app.
const app = express();

//Handle incoming post/put request objects with middleware
app.use(express.json());

//Handle statics files.
app.use(express.static(path.join(__dirname, '..', 'public')));

//Webpack app loading.
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//Express Router. Any route that is not state coming in with "api/routes" will
//be sent to the "/api/routes" (folder/file) path.
app.use('/api/routes', require('./api/routes'));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

//Serve app out out index html file.
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// error handling endware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
