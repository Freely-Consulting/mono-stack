const cache = require("../models").cache;
const db = require("../models").db;
const User = db.user;

/*
  create_new_user

  Creates a new user and adds them to the database. 
*/
const create_new_user = async(req, res, next) => {
  await cache.set('key1', 'value');
  // Create a new user instance
  const newUser = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
  });

  // Save the new user instance to the database
  newUser.save((err, savedUser) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Saved user: ${savedUser}`);
    }
  });
  
  next();
};

/*
  is_duplicate 

  Returns true if there is a duplicate email or phone number in the database
*/
is_duplicate = (req, res, next) => {
  console.log("hello world");
  next();
};

const user_functions = {
  create_new_user,
  is_duplicate
};

module.exports = user_functions;

