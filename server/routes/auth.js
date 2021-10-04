const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

//Registering Users
router.post('/register', (req, res)=>{

    const {name, email, password, cpassword} = req.body;
    
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "Please fill fields properly"});
    }

    User.findOne({email:email})
        .then((userExist) => {
            if(userExist){
                return res.status(422).json({error: "Email Already Exists"});
            } else if(password !== cpassword){
                return res.status(422).json({error: "Passwords do not match"});
            } else {
                const user = new User( {name, email, password, cpassword})
                user.save().then(()=>{
                    res.status(201).json({message: "User Added Succesfully"})
                }).catch((err)=>{
                    res.status(500).json({error:"Failed to register"})
                })
            }

            
        }).catch(err => {console.log(err)})
})

//Getting Users
router.get('/register',(req,res)=>{
    User.find((err, users)=>{
        res.status(200).json(users);
    })
})

//Login
router.post('/login', async (req, res)=>{
    try {

        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Please fill data"})
        }
        const userLogin = await User.findOne({email: email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
            })

            if(!isMatch){
                res.status(400).json({message:"Invalid Credentials"})
            } else {
                res.status(200).json({message:"User Login Successfull"})
            }
        } else {
            res.status(400).json({message: "Invalid Credentials"})
        }

        
    }
    catch (err){
        console.log(err);
    }
})

//deleting data
router.delete('/login/:id', (req, res, next)=>{
    User.findByIdAndDelete(req.params.id, (err) => {
        if(err)
            res.status(400).json({error: "Error! Could not delete"});
        res.status(200).json({message: `Successfully deleted user with id ${req.params.id}`})
    })
})

//members page
router.get('/members', authenticate,  (req, res)=>{
    res.send(req.rootUser);
})

module.exports = router;