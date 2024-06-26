//routing it to server js 
const express = require('express')
const userApp = express.Router();
const expressAsyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

userApp.use(express.json())

const cors = require('cors');
userApp.use(cors());


// Get user details by user ID
userApp.get('/user/:userId', expressAsyncHandler(async (req, res) => {
    const userCollectionObj = req.app.get('userCollectionObj');
    const userId = req.params.userId;

    try {
        const user = await userCollectionObj.findOne({userId: userId });
        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            // Exclude sensitive information like password before sending user data
            const { password, ...userData } = user;
            res.status(200).send({ user: userData });
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
}));


//register user
userApp.post('/register', expressAsyncHandler(async (req,res) => {
    
    const userCollectionObj = req.app.get('userCollectionObj')
    const newUser = req.body 
    let checkUser = await userCollectionObj.findOne({email:newUser.email})
    if(checkUser!=null){
        res.status(200).send({message : "An account already exists with this email. Please try logging in."})
    }
    else{
        let hashedPassword = await bcryptjs.hash(newUser.password,5)
        newUser.password = hashedPassword;

        await userCollectionObj.insertOne(newUser);
        res.status(201).send({message:"user has been registered"})
    }
}
))

//user login 
userApp.post('/login', expressAsyncHandler(async (req,res) => {
 
    const userCollectionObj = req.app.get('userCollectionObj')
    const logUser = req.body

 
    let userOfDB = await userCollectionObj.findOne({email: logUser.email})

    if( userOfDB == null) {
        res.status(200).send({message : 'Invalid email.'})
    }
    else{
       let isEqual = await bcryptjs.compare(logUser.password, userOfDB.password)
       if(isEqual){
        let jwtToken = jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:"7d"})

        delete userOfDB.password
        res.status(200).send({message : "ok", token:jwtToken, user: userOfDB})
        
       }
       else{
        res.status(200).send({message : "Invalid password."})
       }
    }

}))


module.exports=userApp;