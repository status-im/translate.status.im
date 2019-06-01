var request = require("request");

var options = {
    method: 'GET',
    url: 'https://api.lokalise.co/api2/projects',
    qs: { filter_team_id: '562366815b97551836b8f1.55149963' },
    headers: { 'x-api-token': 'f1a59805d56f87ef46c2562dcd707f7e45103241' }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});