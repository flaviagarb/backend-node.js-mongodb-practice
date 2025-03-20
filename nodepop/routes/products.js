import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

/* GET products */
router.get('/', async (req, res, next) => {
    try {
        console.log('Mostrando productos desde la base de datos');
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        next(error);
    }
});

export default router;