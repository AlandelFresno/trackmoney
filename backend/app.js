// Imports
const express = require('express');
const dotenv = require('dotenv');

const sequelize = require('./database/connection');
const User = require('./models/userModel');
// const & let
const app = express();
const port = process.env.PORT || 3001;

// Middleware & config
app.use(express.json());
app.use(express.urlencoded({extended:false}));
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
    res.status(200).send('Hello world');
});

app.delete('/api/users/:id', (req, res) => {
   User.destroy({
       where: {
           id : req.params.id
       }
   });
   res.status(200).send('Deleted');
});
app.post('/api/users', (req, res) => {

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        createdat: Date.now()
    })
    .then( () => {
        res.status(200).send('User created');
    })
    .catch((err) => {
        res.send(err.message);
    });
});

// app.get('/api/operation', (req, res) => {

// });

// app.get('/api/operation/:id', (req, res) => {
//     res.send(req.params.id);
// });


