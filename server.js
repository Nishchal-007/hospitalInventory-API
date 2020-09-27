var mongoUtil = require( './mongoUtil' );
const express = require('express');
let bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoUtil.connectToServer(( err, client ) => {
    if (err) console.log(err);

    // HomePage Route
    app.get('/', (req, res) => {
        res.send("Hello World ! What do u want to check?")
    })
    // Ventilators Routes
    const ventilatorRoutes = require('./routes/ventilators');
    // Hospitals Routes
    const hospitalRoutes = require('./routes/hospitals');
    app.use('/hospitals', hospitalRoutes);
    app.use('/ventilators', ventilatorRoutes);
});


// Port number
app.listen(1234);