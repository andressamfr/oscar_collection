import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String
})