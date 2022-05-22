
const express = require('express');
const User = require('../models/userModel');

const router = express.Router();


router.get('/operation', async(req, res) => {
    console.log(req);
    await User.findAll()
        .then(() => {res.json(hello)})
        .catch((err) => {res.json})
});

router.post('/operation', async(req, res) => {
    // console.log(req);
    User.update({
            transactions: [
                User.transactions,
                {
                transactionID: '',
                title: req.body.title,
                operationType: req.body.operationType,
                amount: req.body.amount,
                createdat:  Date.now()
            }]
        },
        {   
            where: {transactions: User.transactions || null}
        }
    ).then(() => {res.status(200).send('Updated')})
     .catch((err) => {res.json(err)});
});

module.exports = router;