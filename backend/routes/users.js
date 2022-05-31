
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/users', async(req, res) =>{

    if ( req.query.name !== undefined) {
        User.findAll({
            where:{
                name: req.query.name
            }
        }).then((users) => {
            res.json(users);
        }).catch((err) => {
            console.log('Oops! something went wrong, : ', err);
        });
    } else {
        res.status(400).send('Please enter a name to search');
    };
});

router.post('/users', (req, res) => {
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
    
router.delete('/users/:id', (req, res) => {
    User.destroy({
        where: {
            id : req.params.id
        }
    });
    res.status(200).send('Deleted');
});

module.exports = router;