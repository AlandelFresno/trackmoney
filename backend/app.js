// Imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const sequelize = require('./database/connection');
const { User } = require('./models/index');
const user = require('./routes/users');
const operations = require('./routes/operations');

// const & let
const app = express();
const port = process.env.PORT || 3001;

// Middleware & config
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
dotenv.config({path: '.env.local'});


// database
User.sequelize.sync().then((req) => {
    // Server Listen
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
});

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        "/api/users": ""
    });
});
app.use('/api', user);
app.use('/api', operations);


