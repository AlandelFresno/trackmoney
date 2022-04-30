// Imports
const express = require('express');
const dotenv = require('dotenv');

// const & let
const app = express();
const port = process.env.PORT || 3001;

// Middleware & config
app.use(express.json());
app.use(express.urlencoded({extended:false}));
dotenv.config({path: '.env.local'});

// Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

// app.get('/api/operation', (req, res) => {

// });

// app.get('/api/operation/:id', (req, res) => {
//     res.send(req.params.id);
// });

// Server Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

