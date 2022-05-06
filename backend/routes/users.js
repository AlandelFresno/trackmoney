
const express = require('express');
const router = express.Router();

router.delete('/users/:id', (req, res) => {
    User.destroy({
        where: {
            id : req.params.id
        }
    });
    res.status(200).send('Deleted');
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

 module.exports = router;