
const express = require('express');
const router = express.Router();


router.get('/operation', (req, res) => {

});

router.get('/operation/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;