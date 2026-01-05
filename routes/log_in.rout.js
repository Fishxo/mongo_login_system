const express = require('express');
const router = express.Router();
//importing models 
const stud = require('../models/new_reco');

// getting a login page by login link 
router.get('/login',(req,res)=>{
    res.render('login')

})
// making sure if the use had an account 

router.post('/login', async(req,res)=>{
    const {email,password} = req.body;

    try{
        const st = await stud.findOne({email:email});

        if(!st){
          return  res.send('user does not exist')
        }  if(st.password !== password){
           return res.send('password does not match')
        }
        res.render('home')
            

    }catch(error){
        console.log(error)
        res.send('we have problem here')
    }
})

module.exports = router;
 