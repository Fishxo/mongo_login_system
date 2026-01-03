//importing packages 
const express = require('express');
const mongoose = require('mongoose');

//declaring app
const app = express();

//middleware handler
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

// connecting to database
mongoose.connect('mongodb://localhost:27017/new')
.then(()=>console.log('connected to db'))
.catch(err=>console.log('could not connecte to db'));

//setting schema
const signinSchema = new mongoose.Schema ({
    firstName : String,
    userName :String,
    age : Number,
    email : {type:String,unique:true},
    password : String,
})

//create a model
const stud = mongoose.model('new_reco',signinSchema);

//using signin form 
app.post('/signin', async(req,res)=>{
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

//use button for fetching
app.get('/fetching',async(req,res)=>{

    try{
      const hulu =  await stud.find();
        res.render('fetch',{studell:hulu})
    }catch(error){
        console.log(error)
        res.send('could not fetch your data')
    }
})

//getting edit link
app.get('/edit/:id', async(req,res)=>{
   const userId = req.params.id;
   

   try{
     const edit = await stud.findById(userId);
    res.render('update',{edit})
   }catch(error){
    console.log(error)
    res.send('could not get an edit')
   }
})

//an update button
app.post('/update/:id',async(req,res)=>{
    const userId = req.params.id;
    try{
        
        await stud.findByIdAndUpdate(userId , req.body);
        res.redirect('/fetching')
    }catch(error){
        console.log(error)
        res.send('sorry could not done update')
    } 
})

// using delete button
app.post('/delete/:id',async(req,res)=>{
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
// getting a signin.ejs
app.get('/',(req,res)=>{
    res.render('index')
}) 

//getting a signin page by signin link
app.get('/signup',(req,res)=>{
    res.render('signin')
})
// getting a login page by login link 
app.get('/login',(req,res)=>{
    res.render('login')
})

// making sure if the use had an account 
app.post('/login', async(req,res)=>{
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
app.listen(3000,(req,res)=>{
    console.log('server is running')
})