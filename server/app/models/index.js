const mongoose = require('mongoose');
const redis = require('redis');
/*
  db 

  This object will represent the connection to the mongodb instance by storing document object models on which querries can be performed.
*/
const db = {}
db.mongoose = mongoose;

// adds data models to object 
db.user = require("./user.model")


/*
  cache

  This object will represent the connection to the redis instance through which operations can be performed.
*/
let cache = {}
cache = redis.createClient();

module.exports = {
  db: db,
  cache: cache
}; 

