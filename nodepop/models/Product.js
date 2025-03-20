import mongoose, { Schema } from 'mongoose'


// definir el esquema de los productos
const productSchema = new Schema({
    name: String,
    owner: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
    price: Number,
    image: String,
    tags: [String]
}, {
    collection: 'products' // para forzar el nombre de la colección
})

// crear el modelo
const Product = mongoose.model('Product', productSchema)

export default Product
