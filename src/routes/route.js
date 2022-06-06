const express = require('express');
const router = express.Router();

     let players = [{
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
         {"name": "kallo",
         "dob": "1/08/2000",
         "gender": "female",
         "city": "ghaziabad",
         "sports": [
         "Tennis"
         ],
         }   
     ]

     
     router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    
    

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
          res.send("This player was already added!")
             }
        else {
          players.push(newPlayer)
          res.send(players)
      }
    }
    })
  

module.exports = router;