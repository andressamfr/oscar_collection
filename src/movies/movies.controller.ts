import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Movie } from './shared/movie';
import { MovieService } from './shared/movie.service';

@Controller('movies')
export class MoviesController {
    constructor(private movieService: MovieService) {}

    @Get()
    async getAll() : Promise<Movie[]> {
        return this.movieService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Movie> {
        return this.movieService.getById(id);
    }

    @Post()
    async create(@Body() movie: Movie) : Promise<Movie> {
        return this.movieService.create(movie);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() movie: Movie) : Promise<Movie> {
        movie.id = id;
        return this.movieService.update(movie);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.movieService.delete(id);
    }
}
