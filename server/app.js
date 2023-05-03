const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./app/models");
const PORT = 8080;

app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

require("dotenv").config();

// connect to database
models.db.mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'app-db'
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// connect to cache
models.cache
  .connect()
  .then(() => {
    console.log("Successfully connect to Redis.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

// routes
require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}.`);
});

module.exports = app;

