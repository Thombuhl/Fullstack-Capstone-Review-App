const app = require("./app");

//Name port
const port = process.env.PORT || 8080;

//Listen to port.
app.listen(port, () => console.log(`listening on port ${port}`));
