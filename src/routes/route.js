const express = require('express');

const router = express.Router();
// Question -1
router.get('/test-me', function (req, res) {
     let arr =['Ramayana','Mahabharata','Amrit','Sholay']
        res.send('list of the movies that i like are'+ ' '+ arr+'.')
});
// Question -2
router.get('/movies/:indexNumber', function (req, res) {  
    let arr =['Ramayana','Mahabharata','Amrit','Sholay']
        let item = arr[req.params.indexNumber]
           res.send(item);
});
// Question -3 I have changed the movies  handler to movie so that i can run Q2 and Q3 seprately
router.get('/movie/:indexNumber', function (req, res) {  
  let arr =['Ramayana','Mahabharata','Amrit','Sholay']
      let item = arr[req.params.indexNumber]
      if(req.params.indexNumber<=3){
         res.send(item);}
         else (
           res.send(" Error Please use a valid index number")
         )
});
// Question -4 
router.get('/films', function (req, res) {  
let arr = [ {
  "id ": 1,
  "name": "The Shining"
 }, {
  "id": 2,
  "name": "Incendies"
 }, {
  "id": 3,
  "name": "Rang de Basanti"
 }, {
  "id": 4,
  "name": "Finding Nemo"
 }]
 res.send(arr);
});
// Question no -5
router.get('/films/:filmId', function (req, res) {  
  let arr = [ {
    "id ": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   let x = req.params.filmId
   let item = arr[x -1]
   if (req.params.filmId<5){
         res.send(item);}
         else {
           res.send("No movie exists with this Id")
         }
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