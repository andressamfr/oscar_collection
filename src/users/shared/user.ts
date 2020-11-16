import { Document } from 'mongoose';

export class User extends Document {
    // id: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    foto: string;
}
