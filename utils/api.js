const axios = require("axios");

const api = {
  async getUser(username) {

    const queryUrl = `https://api.github.com/users/${username}`;
    
    return await axios.get(queryUrl);   ///=== $.ajax === app.get(using express)
    
  }
};

module.exports = api;



