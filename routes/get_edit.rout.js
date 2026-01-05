const express = require('express');
const router = express.Router();
const stud = require('../models/new_reco');
//getting edit link
router.get('/edit/:id', async(req,res)=>{
   const userId = req.params.id;
   

   try{
     const edit = await stud.findById(userId);
    res.render('update',{edit})
   }catch(error){
    console.log(error)
    res.send('could not get an edit')
   }
})

module.exports = router;