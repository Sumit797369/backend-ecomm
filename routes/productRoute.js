import express from 'express';
import {addProduct,listProduct,removeProduct,singleProduct} from '../controllers/productController.js';

const productRouter = express.Router();


productRouter.post('/add',addProduct)
productRouter.post('/remove',listProduct)
productRouter.post('/single',removeProduct)
productRouter.get('/list',singleProduct)

export default productRouter