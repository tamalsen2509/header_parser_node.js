// server.js file ,to communicate server and run on port
let app = require('./app');
let port = process.env.PORT || 3030; 


app.listen(port, () => {
    console.log ('api is running at port ' + port )
})


