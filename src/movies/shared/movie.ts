import { Document } from 'mongoose';

export class Movie extends Document {
    // id: number;
    titulo: string;
    sinopse: string;
    duracao: number;
    ano: number;
    diretor: string;
    onde_ver: Array<string>;
    poster: string;
}
