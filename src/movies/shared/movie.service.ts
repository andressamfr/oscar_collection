import { Injectable } from '@nestjs/common';
import { Movie } from './movie';

@Injectable()
export class MovieService {
    movies: Movie[] = [
        {id: 1, titulo: "Coringa", sinopse: "blablablabla", duracao: 120, ano: 2019, diretor: "Todd Philipps", onde_ver: ["Netflix", "Amazon Prime"]},
    ];

    getAll() {
        return this.movies;
    }

    getById(id: number) {
        const movie = this.movies.find((value) => value.id == id);
        return movie;
    }

    create(movie: Movie) {
        let lastId = 0;
        if (this.movies.length > 0) {
            lastId = this.movies[this.movies.length - 1].id;
        }

        movie.id = lastId + 1;
        this.movies.push(movie);

        return movie;
    }

    update(movie: Movie) {
        const movieArray = this.getById(movie.id);
        if (movieArray) {
            movieArray.titulo = movie.titulo;
            movieArray.sinopse = movie.sinopse;
            movieArray.duracao = movie.duracao;
            movieArray.ano = movie.ano;
            movieArray.diretor = movie.diretor;
            movieArray.onde_ver = movie.onde_ver;
        }

        return movieArray;
    }

    delete(id: number) {
        const index = this.movies.findIndex((value) => value.id == id);
        this.movies.splice(index, 1);
    }

    
}
