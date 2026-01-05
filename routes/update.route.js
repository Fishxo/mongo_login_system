const express = require('express');
const router = express.Router();
const stud = require('../models/new_reco');
//an update button
router.post('/update/:id',async(req,res)=>{
    const userId = req.params.id;
    try{
        
        await stud.findByIdAndUpdate(userId , req.body);
        res.redirect('/fetching')
    }catch(error){
        console.log(error)
        res.send('sorry could not done update')
    } 
})

module.exports = router;