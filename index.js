// const express = require('express');       here we will not use this syntax as we are dealing with React its somewhat different. its depends on type: commonjs and other below format if type:module in pckage.json

import  express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import subsRoutes from './routes/subs.js'


const app = express();
dotenv.config();
app.use(express.json({limit:'30mb', extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/', (req,res) => {
    res.send("This is a stack overflow clone API");
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
app.use('/subs', subsRoutes)

const PORT = process.env.PORT || 5000
   
const DATABASE = process.env.CONNECTION_URL

mongoose.connect(DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
     .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
     .catch((err) => console.log(err.message))