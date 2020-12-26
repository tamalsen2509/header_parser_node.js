let express = require('express');
let route = express.Router();
let geoIp = require('geoip-lite');
let message = require('../const/message')



// api endpoints
route.get('/hello', (req, res) => {
    res.status(200).send(message.obj.introduction)
    console.log(req.headers)
})




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










module.exports = route;