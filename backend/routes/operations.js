
const express = require('express');
const router = express.Router();
const { Operation } = require('../models/index');


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
    Operation.create({
        operationType: req.body.params.operationType,
        title: req.body.params.title,
        amount: req.body.params.amount,
        userID: req.body.params.userID,
        createAt: Date.now(),
    })
    .then( () => {
        res.status(200).send('Op created');
    })
    .catch((err) => {
        res.send(err.message);
        console.log(err);
    });
});

router.delete('/operation', (req, res) => {
    Operation.destroy({
        where: {
            id: req.query.id
        }
    }).then ( () => {
        res.status(200).send('Op deleted');
    }).catch((err) => {
        res.send(err.message);
        console.log(err);
    });
});

router.put('/operation', (req, res) => {
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
        res.send('hello');
    }).catch(err => {
        console.log(err);
        res.status(400).send(err)
    });
});

module.exports = router;