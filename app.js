// app.js file where express.js based main modules are stored 


let express = require('express');
let app = express();
let geoIp = require('geoip-lite');
let cors = require('cors');
let helmet =require('helmet')
let message = require('./const/message')

// app middleware 
app.use(express.json()); // parser to accept json data from client
app.use(express.urlencoded({ extended: false }));  // body parser to receive html form data

app.set('trust proxy', true);

// enable cors
app.use(cors({optionsSuccessStatus : 200}));

// basisc security 

app.use(helmet())


// to load static files 
app.use(express.static('public'))


// index routes 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


// api endpoints
app.get('/api/hello', (req, res) => {
    res.status(200).send(message.obj.introduction)
    console.log(req.headers)
})




app.get('/api/mydetails', (req, res) => {
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


module.exports = app;