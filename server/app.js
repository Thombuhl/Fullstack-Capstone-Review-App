const express = require("express");

const app = express();

app.use(express.json());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./routes/api"));
app.use("/routes/api/", require("./routes/api/ENTER FILE WITH ROUTES"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.use("/public", express.static("public")); // STATIC LINE

// any remaining requests with an extension (.js, .css, etc.) send 404

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
