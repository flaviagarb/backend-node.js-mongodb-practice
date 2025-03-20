import readline from 'node:readline/promises'
import connectMongoose from "./lib/connectMongoose.js";
import Product from './models/Product.js';


const randomImg = Math.floor(Math.random() * 1000)
const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

const answer = await ask('Are you sure you want to delete database collections? (n)')
if (answer.toLowerCase() !== 'y') {
    console.log('Operation aborted.')
    process.exit()
}

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
            image: 'https://picsum.photos/id/${randomImg}/300/200;',
            tags: ['mobile', 'motor', 'lifestyle']
        },
        {
            name: 'Tablet',
            price: 600,
            image: 'https://picsum.photos/id/${randomImg}/300/200;',
            tags: ['mobile', 'motor', 'lifestyle']
        },
        {
            name: 'MTV',
            price: 700,
            image: 'https://picsum.photos/id/${randomImg}/300/200;',
            tags: ['mobile', 'motor', 'lifestyle']
        },
    ])
    console.log(`Inserted ${insertProduct} products. Total products ${insertProduct.length}`)
}

async function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const result = await rl.question(question)
    rl.close()
    return result
}