import express from 'express';
import products from '../models/products.js';

const router = express.Router();

/* GET products */
router.get('/', async (req, res, next) => {
    try {
        console.log('mostrando productos'); // esto se imprimirá en la terminal del servidor
        res.json(products); // esto envia la lista de productos como json al navegador(cliente)
    } catch (error) {
        next(error); // manejo de errores si ocurre algo inesperado
    }
});

export default router;