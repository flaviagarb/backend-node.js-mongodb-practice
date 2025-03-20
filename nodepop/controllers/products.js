import Product from '../models/Product.js';

const ProductController = {
    get: async (req, res, next) => {
        try {
            console.log('Mostrando productos desde la base de datos');
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            next(error);
        }
    }
}

export default ProductController;
