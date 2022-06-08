
const express = require('express');
const { User, Operation } = require('../models/index');

const router = express.Router();


router.get('/operation', async(req, res) => {
    Operation.findAll({
        where: {
            userID: req.query.userID
        }
    }).then( (ops) => {
        res.status(200).json(ops);
    }).catch((err) => {
        console.log(err);
        res.send(err.message);
    });


});

router.post('/operation', async(req, res) => {
    
    // User.findAll({})
    // console.log(req.body.params)

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

router.delete('/operation', (req, res) => {
    // console.log(req)
    Operation.destroy({
        where: {
            id: req.query.id
        }
    }).then ( () => {
        res.status(200).send('Op deleted');
        console.log('Operation deleted');
    }).catch((err) => {
        res.send(err.message);
        console.log('catch operation.delete');
        console.log(err);
    });
});

router.put('/operation', (req, res) => {
    // req.params.id // id
    // req.query // operation data
    console.log(req.query)
    console.log(req.body)

    // const operation = Operation.findAll({ where: {id: req.query.id}})
    Operation.update(
        {
            title: req.body.title,
            amount: req.body.amount,
            operationType: req.body.operationType
        },
        { 
            where: { id: req.body.id}
        }
    ).then (() => {
        console.log('put then');
        res.send('hello');
    }).catch(err => {
        console.log('put catch');
        console.log(err);
        res.status(400).send(err)
    });
});
module.exports = router;