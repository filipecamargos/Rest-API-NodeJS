/**
 * Before starting make sure to have npm (node packages management)
 * make sure to run npm install nodemon to start a package.json file to configure
 */

//Importing express service and saving it into express variable
const express = require('express');

//To extra the info sent by post as a body
const bodyParser = require('body-parser');

//Importing the routers
const router = require('./routes/service')

//Starting the app using express
const app = express();

//To parse the body in json
app.use(bodyParser.json());

app.use('/app', router)


//Listing on the 3000 port
app.listen(5000);