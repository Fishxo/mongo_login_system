const express = require('express');
const router = express.Router();
const stud = require('../models/new_reco');


// using delete button
router.post('/delete/:id',async(req,res)=>{
    const userId = req.params.id;

    try{
         await stud.findByIdAndDelete(userId);
         const studell = await stud.find();
        res.render('fetch',{studell})
    }catch(error){
        console.log(error)
        console.log('sorry could not delet your data')
    }
})

module.exports = router;