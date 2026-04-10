import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectUploadCare from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// import { v2 as cloudinary } from "cloudinary";

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB();






//middlewares
app.use(express.json());
app.use(cors())

//api endpoints
app.use('/api/user', userRouter);
app.use('/api/product',productRouter)

//api endpoints
app.get('/',(req,res)=>{
   res.send('API Working' + "hellohjp") 
});
app.listen(port,()=>console.log('server started : '+ port))