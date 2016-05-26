var dotenv = require('dotenv').config();
var asana = require('asana');

var token = process.env.TOKEN



// Capture and store user info (assume first workspace is primary)
var client = asana.Client.create().useAccessToken(token);
client.users.me().then(function(user) {
  var userName = user.name;
  var workspaceId = user.workspaces[0].id;
  var workspaceName = user.workspaces[0].name;
  console.log("User: " + userName + " has a workspace called " + workspaceName + " which has an ID of " + workspaceId);

  return client.projects.findByWorkspace(workspaceId).then(function(collection) {
    //Asking for "0" returns everything
    collection.fetch(0).then(function(name) {

      console.log(typeof name);
    });
  });
});



//Try out API calls to retrieve list of projects and parse out Project name and project email address
