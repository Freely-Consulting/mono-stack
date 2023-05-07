const { user_functions, auth_functions} = require("../middleware"); 

/*
  This file defines the API endpoints begining with /auth that will be used by the frontened to authenticate a user.
*/

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // create user, generate user token
  app.post("/auth/signup", user_functions.create_new_user, (req, res) => {
    res.status(201).send({ message: "User was registered successfully!" });
  });

  //  
  app.post("/auth/login", (req, res) => {
    res.send({ message: "User logged in!" });
  });
  
  // for logout, must refresh page and return to home, or when session expires
  app.post("/auth/login", (req, res) => {
    res.send({ message: "User logged in!" });
  });

};

