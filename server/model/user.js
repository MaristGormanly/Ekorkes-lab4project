class User 
  {   constructor(username, email, password) 
    {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }
  
  exports.createUser = (username, email, password) => 
  {
    return new User(username, email, password);
  };
  
  console.log("[userModel] initialized");
  