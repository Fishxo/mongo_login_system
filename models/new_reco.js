const express = require('express');
const moongoose = require('mongoose');

//setting schema
const signinSchema = new moongoose.Schema ({
    firstName : String,
    userName :String, 
    age : Number,
    email : {type:String,unique:true},
    password : String,
})

//create a model
module.exports = moongoose.model('new_reco',signinSchema);