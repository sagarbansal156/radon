const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
        res.send('My first ever api!')
});

router.get('/hello', function (req, res) {  
      res.send('My second ever api!')
});

//Assignment 2 by Pritesh Sir
router.post('/test-me4', function (req, res) {
   let player = [{
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]}
        ,
        {
         "name": "ramesh",
        "dob": "1/1/1998",
        "gender": "male",
        "city": "jodhpur",
        "sports": [
        "cricket"]
        },
        {"name": "kallu",
        "dob": "1/08/2000",
        "gender": "male",
        "city": "ghaziabad",
        "sports": [
        "Tennis"
        ],
        }
        
    ]
        
    res.send('My last api!')
  });

module.exports = router;
// adding this comment for no reason