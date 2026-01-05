const express = require('express');
const router = express.Router();
const stud = require('../models/new_reco');
//using signin form 
router.post('/signin', async(req,res)=>{
    const {firstName,userName,age,email,password} = req.body;

    const stu = new stud({firstName,userName,age,email,password});
      const existingUser = await stud.findOne({ email: req.body.email });
            if (existingUser) {
                return res.send('Email already registered');
                    }
    try{
          await stu.save();
         res.send('your data is saved successfully');
    }catch(error){
        console.log(error)
        res.send('could not save your data')
    }
})

module.exports = router;