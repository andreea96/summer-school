import { Injectable } from "@nestjs/common";

@Injectable()
export class MovieService {
    constructor() {}

    getMovies(page, limit) {
        return {
            data: [{
                id: 1,
                title: 'The prestige', 
                director: 'Cristopher Nolan'
            }],
            meta: {
                page, 
                limit, 
                total: 1
            }
        };
    }

    getMovie(id) {
        return {
            id, 
            title: 'Interstellar', 
            director: 'Cristopher Nolan'
          }
    }

    addMovie(movieDTO) {
        console.log(movieDTO);
    }

    patchMovie(id, movieDTO) {
        console.log(movieDTO, id);
    }

    delete(id) {
        console.log(id);
    }
    
}