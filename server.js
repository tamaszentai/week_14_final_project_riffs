const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const profile = require( './routes/routes');
const config = require("./config/config");

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

config.connectDB();

app.use( '/api/profile', profile );

const port = process.env.PORT || 5000;

app.listen( port, () => console.log( `Server running on port: ${port}` ) );