const express = require ('express');//add library express to this program
const bodyParser = require('body-parser');
const mongodb = require('./data/database');//add mongo library
const app = express(); //instance to express

const port = process.env.PORT || 3000; //declaring a port with a local variable

app.use(bodyParser.json());
app.use('/', require('./routes'));//include routes



mongodb.initDb((err) => {
   if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => (console.log(`Database is lsitenning and node running on port ${port}`)));
    }
});
//comment