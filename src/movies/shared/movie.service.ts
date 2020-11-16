import { Injectable } from '@nestjs/common';
import { Movie } from './movie';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MovieService {
    
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}

    async getAll() {
        return await this.movieModel.find().exec();
    }

    async getById(id: string) {
        return await this.movieModel.findById(id).exec();
    }

    async create(movie: Movie) {
        const addedMovie = new this.movieModel(movie);
        return await addedMovie.save();
    }

    async update(id: string, movie: Movie) {
        await this.movieModel.updateOne({_id: id}, movie).exec();
        return this.getById(id);
    }


    async delete(id: string) {
        return await this.movieModel.deleteOne({_id: id}).exec();
    }

    
}
