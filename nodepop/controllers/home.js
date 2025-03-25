
import { name } from 'ejs';
import Product from '../models/Product.js';

//GET HOMEPAGE

const HomeController = {
    get: async (req, res, next) => {
        try {
            res.locals.session = req.session;
            res.locals.products = await Product.find();
            res.render('home');
        } catch (error) {
            next(error);
        }
    }
};

export default HomeController;