import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectUploadCare from './config/uploadCare.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectUploadCare(); 
// console.log(process.env.MONGODB_URI);


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