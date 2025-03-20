import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

//definir el esquema
const userScherma = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String
})

// método del modelo

userScherma.statics.hashPassword = (clearPassword) => {
    return bcrypt.hash(clearPassword, 7) //esto devuelve una promesa que se resuleve a una password cifrada
}

// crear el modelo
const User = mongoose.model('User', userScherma)


export default User;