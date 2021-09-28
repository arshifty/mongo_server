// const { json } = require('body-parser');
// var request = require('request');

// var headers = {
//     'Authorization': 'a471f2db02ad3d14b7eba6cf5cb84fef5e76146f'
// };

// var options = {
//     // url: 'https://bitly.net/3jCTO0V',
//     url: 'https://api-ssl.bitly.com/v4/bitlinks/bitly.net/classrollinfo',
//     headers: headers
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
//     if (error) {
//         console.log(error);
//     }
// }

// request(options, callback);

// var request = require('request');

// var headers = {
//     'Authorization': 'a471f2db02ad3d14b7eba6cf5cb84fef5e76146f'
// };

// var options = {
//     url: 'https://api-ssl.bitly.com/v4/groups?organization_guid=Bk47bZakjJs',
//     headers: headers
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);

// var request = require('request');

// var headers = {
//     'Authorization': 'a471f2db02ad3d14b7eba6cf5cb84fef5e76146f',
//     'Content-Type': 'application/json'
// };

// var dataString = '{ "long_url": "http://127.0.0.1:3006/ess/information", "domain": "bit.ly", "group_guid": "Bk47bZakjJs" }';

// var options = {
//     url: 'https://api-ssl.bitly.com/v4/shorten',
//     method: 'POST',
//     headers: headers,
//     body: dataString
// };

// function callback(error, response, body) {
//     console.log(body);
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);

var request = require('request');

var headers = {
    'Authorization': 'a471f2db02ad3d14b7eba6cf5cb84fef5e76146f',
    'Content-Type': 'application/json'
};

var dataString = '{ "custom_bitlink": "club.ly/doc", "bitlink_id": "bit.ly/3jCTO0V" , "group_guid": "Bk47bZakjJs" }';

var options = {
    url: 'https://api-ssl.bitly.com/v4/custom_bitlinks',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    console.log(body);
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);