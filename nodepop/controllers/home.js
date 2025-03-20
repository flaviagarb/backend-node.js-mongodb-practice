
import Product from '../models/Product.js';

//GET HOMEPAGE

const HomeController = {
    get: async (req, res, next) => {
        try {
            res.locals.title = 'Nodepop';
            res.locals.products = await Product.find();
            res.render('home');
        } catch (error) {
            next(error);
        }
    }
};

export default HomeController;