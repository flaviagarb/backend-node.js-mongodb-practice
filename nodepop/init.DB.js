import connectMongoose from "./lib/connectMongoose.js";
import User from './models/User.js'

const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)