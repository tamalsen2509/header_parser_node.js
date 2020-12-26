// app.js file where express.js based main modules are stored 


let express = require('express');
let app = express();
let cors = require('cors');
let helmet =require('helmet')


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

// setting up router for api endpoins /mydetails
app.use('/api/v1', require('./routes/endpoins'));




module.exports = app;