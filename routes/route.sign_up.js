const express = require('express');
const router = express.Router();

// getting a signin.ejs
router.get('/',(req,res)=>{
    res.render('index')
}) 

module.exports = router;