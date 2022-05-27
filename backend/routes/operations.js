
const express = require('express');
const { User, Operation } = require('../models/index');

const router = express.Router();


router.get('/operation', async(req, res) => {
    


});

router.post('/operation', async(req, res) => {
    
    User.findAll({})
    console.log(req.body.params)

    Operation.create({
        operationType: req.body.params.operationType,
        title: req.body.params.title,
        amount: req.body.params.amount,
        userID: req.body.params.userID,
        createAt: Date.now(),
    })
    .then( () => {
        res.status(200).send('Op created');
        console.log('then operation.create');
    })
    .catch((err) => {
        res.send(err.message);
        console.log('catch operation.create');
        console.log(err);
    });

});

module.exports = router;