import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/userRoutes';


const app = express();
const PORT =  3000;

var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');

//mongoose connection
mongoose.Promise = global.Promise;
//inout the server url when available
mongoose.connect(configDB.url);


//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


// routes 
routes(app);

//LAUNCH
app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);
app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);