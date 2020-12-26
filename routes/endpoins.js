
// area to instantiate app level modules . 
let express = require('express');
let route = express.Router();
let geoIp = require('geoip-lite'); // package to return user location from an object *geo
let message = require('../const/message') // object to declare response message



// api endpoint /hello 
// @get /baseurl/api/v1/hello;
route.get('/hello', (req, res) => {
    res.status(200).send(message.obj.introduction)
    console.log(req.headers)
})


// api endpoint /mydetails 
// @get /baseurl/api/v1/mydetails;
route.get('/mydetails', (req, res) => {
    let headers = req.headers;
    let geo = geoIp.lookup(req.ip)

    message.obj.userHeader = {
        ipadress: req.ip,
        language :headers["accept-language"] ,
        browser_info: headers["user-agent"],
        country: geo.country,
        city: geo.city
    }
    res.status(200).json(message.obj.userHeader)
})





module.exports = route;  // exporting module