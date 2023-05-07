const bcrypt = require("bcryptjs");
const cache = require("../models").cache;
const db = require("../models").db;
const User = db.user;
const salt_rounds = 10;
/*
  create_new_user

  Creates a new user and adds them to the database. 
*/
const create_new_user = async (req, res, next) => {
  // create new user object and hash password
  const new_user = new User({
    _id: req.body.user_id,
    password: bcrypt.hashSync(req.body.password, salt_rounds) 
  });
  
  // Save the new user instance to the database, if duplicate, return 409 conflict code
  try {
    await new_user.save(); 
  } catch (err) {
      // mongodb error code for duplicate user is 11000
      if (err.code === 11000) {
        console.log(err);
        res.status(409).send({error: "User already exists"});
        return;
      } else {
        console.error(err);
      }
  }

  next();
};


const user_functions = {
  create_new_user,
};

module.exports = user_functions;

