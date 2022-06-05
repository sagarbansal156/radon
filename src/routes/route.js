const express = require('express');

const router = express.Router();
// question -1
router.get('/test-me', function (req, res) {
     let arr =['Ramayana','Mahabharata','Amrit','Sholay']
        res.send('list of the movies that i like are'+ ' '+ arr+'.')
});

router.get('/movies/:indexNumber', function (req, res) {  
    let arr =['Ramayana','Mahabharata','Amrit','Sholay']
    console.log(arr[0])
    let item = arr[req.params.indexNumber]
     console.log(item)
      res.send(item)
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