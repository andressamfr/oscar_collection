import * as mongoose from "mongoose";

export const MovieSchema = new mongoose.Schema({
    titulo: String,
    sinopse: String,
    duracao: Number,
    ano: Number,
    diretor: String,
    onde_ver: [String],
    poster: String
})