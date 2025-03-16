import express from 'express';
import products from '../models/products.js';

const router = express.Router();

/* GET home page */
router.get('/', function (req, res, next) {
    res.locals.title = 'Nodepop'
    res.locals.products = products
    res.render('home')
})

export default router;