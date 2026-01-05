//importing packages 
const express = require('express');
const mongoose = require('mongoose');
const stud =require('./models/new_reco');
//declaring app
const app = express();

//middleware handler
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

//defining authroutes 
const sign_upRoutes = require('./routes/route.sign_up');
const log_inRoutes = require('./routes/log_in.rout');
const use_signinRoutes = require('./routes/use_signin.route');
const fetchingRoutes = require('./routes/fetching.route')
const get_editRoutes = require('./routes/get_edit.rout');
const updateRoutes = require('./routes/update.route')
const deleteRoutes = require('./routes/delete.route');
const dele_mulRoutes = require('./routes/det_mul.route');

// using routes
app.use(sign_upRoutes);
app.use(log_inRoutes);
app.use(use_signinRoutes);
app.use(fetchingRoutes);
app.use(get_editRoutes);
app.use(updateRoutes);
app.use(deleteRoutes);
app.use(dele_mulRoutes)

// connecting to database
mongoose.connect('mongodb://localhost:27017/new')
.then(()=>console.log('connected to db'))
.catch(err=>console.log('could not connecte to db'));




//getting a signin page by signin link
app.get('/signup',(req,res)=>{
    res.render('signin')
})



app.listen(3000,(req,res)=>{
    console.log('server is running')
})