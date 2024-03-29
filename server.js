const express = require ('express');//add library express to this program
const bodyParser = require('body-parser');
const mongodb = require('./data/database');//add mongo library
const app = express(); //instance to express

const port = process.env.PORT || 5000; //declaring a port with a local variable

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));//include routes



mongodb.initDb((err) => {
   if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => (console.log(`Database is listenning and node running on port ${port}`)));
    }
});
