import connectMongoose from "./lib/connectMongoose.js";
import Product from './models/Product.js';

const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

await initDBNodepop()
await connection.close()

async function initDBNodepop() {
    // delete all products al iniciar DDBB
    const products = await Product.deleteMany()
    console.log(products)
    // create product
    const insertProduct = await Product.insertMany([
        {
            name: 'Mobile',
            price: 500,
            image: 'https://picsum.photos/id/${randomId}/300/200;',
            tags: ['mobile', 'motor', 'lifestyle']
        },
        {
            name: 'Tablet',
            price: 600,
            image: 'https://picsum.photos/id/${randomId}/300/200;',
            tags: ['mobile', 'motor', 'lifestyle']
        },
        {
            name: 'MTV',
            price: 700,
            image: 'https://picsum.photos/id/${randomId}/300/200;',
            tags: ['mobile', 'motor', 'lifestyle']
        },
    ])
    console.log(`Inserted ${insertProduct} products. Total products ${insertProduct.length}`)
}