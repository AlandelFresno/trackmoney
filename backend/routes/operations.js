
const express = require('express');
const { User, Operation } = require('../models/index');

const router = express.Router();


router.get('/operation', async(req, res) => {
    


});

router.post('/operation', async(req, res) => {
    
    Operation.create({
        name: req.body.name,
        title: req.body.title,
        amount: req.body.amount,
        operationType: req.body.operationType,
        createdAt: Date.now()
    })
    .then( () => {
        res.status(200).send('User created');
    })
    .catch((err) => {
        res.send(err.message);
    });

});

module.exports = router;