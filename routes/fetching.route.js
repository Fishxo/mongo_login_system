//imposting packages
 
const express = require('express');

const router = express.Router();
const stud =require('../models/new_reco');

//use button for fetching
router.get('/fetching',async(req,res)=>{

    try{
      const hulu =  await stud.find();
        res.render('fetch',{studell:hulu})
    }catch(error){
        console.log(error)
        res.send('could not fetch your data')
    }
})

module.exports = router;