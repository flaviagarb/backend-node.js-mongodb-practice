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
    },
    postNew: async (req, res, next) => {
        try {
            const { name, owner, price, image, tags } = req.body
            const userId = req.session.userId

            const product = new Product({
                name,
                owner,
                price,
                image,
                tags
            })

            // lo guardo en base de datos
            await product.save()

            //vuelve a la home para que se vea la lista
            res.redirect('/')

        } catch (error) {
            next(error)
        }
    }
}

export default ProductController;
