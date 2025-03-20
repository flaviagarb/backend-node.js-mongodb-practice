import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

//GET HOMEPAGE

export async function index(req, res, next) {
    try {
        res.locals.title = 'Nodepop';
        res.locals.products = await Product.find(); // Corrección en la variable
        res.render('home');
    } catch (error) {
        next(error);
    }
}

export default router;