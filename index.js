var dotenv = require('dotenv').config();
var asana = require('asana');

var token = process.env.TOKEN


//Sample to test if it's working
var client = asana.Client.create().useAccessToken(token);
client.users.me().then(function(me) {
  console.log(me);
});

//Try out API calls to retrieve list of projects and parse out Project name and project email address

