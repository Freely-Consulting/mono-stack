
/*
  verify_token

  This function will be invoked before every request that is accessing data to ensure that the requestor is authorized to interact  
  with such resources. This will be done by checking if the payload token is in the Redis token cache.
*/
verify_token = (req, res, next) => {
  next();
};

/*
  generate_token

  This function will generate a session token upon a login or sign up authentication action. The session token will be sent to a Redis 
  cache and be sent back to the user. If the user signifies that they are operating on a private device, the session token will be 
  saved in local storage.
*/
generate_token = (req, res, next) => {
  next();
};


