require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT}=process.env;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db')
}).catch(err => console.log(err));
  
app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));