const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.post("/authenticate", (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(401).json({ message: "invalide credentials" })
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
});

//getall
router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            return res.json(result);
        }).catch((err) => {
            console.log(err);
        });
});

//getbyid
router.get('/getbyid', (req, res) => {
    res.send('Response from user getbyid');
});

//delete
router.get('/delete', (req, res) => {
    res.send('Response from user delete');
});

//update
router.get('/update', (req, res) => {
    res.send('Response from user update');
});

module.exports = router;