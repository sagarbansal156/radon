const express = require('express');
const externalModule = require('./logger')
const logger = require('../logger/logger')
const router = express.Router();
const Date1 = require('../util/helper')
const Month1 = require('../util/helper')
const Batchinfo = require('../util/helper')
const Flatter1 = require('../validator/formattor')
const Flatter2 = require('../validator/formattor')
const Flatter3 = require('../validator/formattor')
router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    logger.welcome()
    Date1.PrintDate()
    Month1.PrintMonth()
    Batchinfo.getbatchinfo()
    Flatter1.Trim()
    Flatter2.lowercase()
    Flatter3.uppercase()


    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const Question4 = require("lodash");
     let arr = ['january','february','march','april','may','june','july','august','september','october','november','december'];
     console.log(Question4.chunk(arr, 3))


     let arr1 =[1,3,5,7,9,11,13,15,17,19]
     console.log(Question4.tail(arr1))

     
     let arr2 =[2,5,6,7]
     let arr3 =[2,8,6,9]
     let arr4 =[2,11,6,15]
     let arr5 =[20,15,16,17]
     let arr6 =[20,25,16,17]
     console.log(Question4.union(arr2,arr3,arr4,arr5,arr6))


     let pairs =[['horror',"The Shining"],['drama',"Titanic"],['thriller',"Shutter Island"],['fantasy',"Pans Labyrinth"]]
     console.log(Question4.fromPairs(pairs))
      res.send('My second ever api!')
});
// pritesh sir assignment 1 question no.1
router.get('/test-me2', function (req, res) {
        let n =7;
       let arr = [1,2,3,5,6,7]
       let requiredSum = n*(n+1)/2
       let givenSum = 0
      for(let i=0;i<arr.length;i++){
          
          givenSum = givenSum + arr[i]
      }
       let missingNumber = requiredSum - givenSum;
       res.send({data:missingNumber})
});
// pritesh sir assignment 1 question no.2
router.get('/test-me3', function (req, res) {
        let n =6;
       let arr = [33,34,35,37,38,]
       let requiredSum = n*(arr[0]+arr[4])/2
       let givenSum = 0
      for(let i=0;i<arr.length;i++){
          
          givenSum = givenSum + arr[i]
      }
     let missingNumber = requiredSum - givenSum;
     res.send({data:missingNumber})
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