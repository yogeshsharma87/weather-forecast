var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    let request = require('request');
    let apiKey = '47d698365632e6dff6b21b94c2e64030';
    let city = 'Gurgaon';
    if(req.query.city)
    {
        city = req.query.city;
    }
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&&units=metric`
    console.log(url);
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
            console.log('response baby:', response);
        } else {
            let weather = JSON.parse(body);
            res.render(__dirname + './../views/index.ejs', {
                'weather': weather
            });
        }
    });
});
module.exports = router;