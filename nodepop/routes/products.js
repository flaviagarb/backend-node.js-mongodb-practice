import express from 'express';
import ProductController from '../controllers/products.js';


const router = express.Router();

/* GET products */
router.get('/', ProductController.get);


export default router;