var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "sadooghi";
var GITHUB_TOKEN = "affffe5f88f4a2843caff25b4536380214d68914";

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  }


  request(options, function(err, response) {
    if (err) throw err;

    cb(err, JSON.parse(response.body))
  });

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  for (var i = 0; i < result.length; i++){
    console.log(result[i].avatar_url);
  }
});

