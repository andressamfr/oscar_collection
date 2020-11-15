import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieService } from './shared/movie.service';
import { MovieSchema } from './schemas/movie.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Movie', schema: MovieSchema}])
    ],
    controllers: [MoviesController],
    providers: [MovieService]
})
export class MoviesModule {}