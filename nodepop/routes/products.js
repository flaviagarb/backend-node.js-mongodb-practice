import express from 'express';
import ProductController from '../controllers/products.js';


const router = express.Router();

/* GET products */
router.get('/', ProductController.get);

/* GET / POST new products */
router.get('/new', ProductController.get)
router.post('/new', ProductController.postNew);

export default router;