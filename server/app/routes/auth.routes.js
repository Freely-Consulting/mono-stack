const { user_functions } = require("../middleware");
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

  app.post("/auth/signup", user_functions.create_new_user, user_functions.is_duplicate, (req, res) => {
    res.send({ message: "User was registered successfully!" });
  });
};

