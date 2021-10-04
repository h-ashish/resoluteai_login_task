const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser()) ;
dotenv.config({path:'./config.env'});
const User = require('./model/userSchema');

app.use(express.json())
app.use(require('./routes/auth'))

const DB =process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log('no connection')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

