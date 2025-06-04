const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors = require('cors')
dotenv.config()

const mongoose=require('mongoose')
const MongoDb_url=process.env.MongoDb_url 
const port=process.env.port || 3000

const User=require('./models/User')
const jwt=require('jsonwebtoken')
const authenticate=require('./middleware/authmiddleware')

app.use(express.json());
const corsOptions = {
  origin: [
    'https://e-learning-a1p9.vercel.app/', // Your Vercel frontend
    'https://e-learning-08m7.onrender.com', // Your Render backend
    'http://localhost:5173' // For local development
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

mongoose.connect(MongoDb_url)
    .then(()=>console.log("MongoDb Connected Successfullyyy"))
    .catch(()=>console.error("MongoDb Connection Failed"))

app.post('/register', async(req, res, next)=>{
    try{
        const { username, password} = req.body;
        const existing = await User.findOne({username});
        if(existing) return res.status(400).json({error: "User already exists"});
        
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message: "User registered successfully"});
    }catch(err){
        next(err)
    }
})

app.post('/login',async(req,res,next)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user|| !(await user.comparePassword(password))){
            return res.status(400).json({error:"Invalid Credentials"});
        }

        const token=jwt.sign(
            {id:user._id,username:user.username},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        );
        res.json({token});
    }catch(err){
        next(err);
    }
})

//protected route
app.get('/dashboard',authenticate,(req,res)=>{
    res.json({message:`Welcome, ${req.user.username}`});
});

app.listen(port,()=>{
    console.log('Connected To port at http://localhost:${port}')
})