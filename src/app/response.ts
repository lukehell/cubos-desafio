import {Simple_Movie} from './simple-movie'

export class Response{
    page: number;
    total_results: number;
    total_pages: number[];
    movies: Simple_Movie[];

    constructor(page:number, t_results: number, t_pages:number[], movies: Simple_Movie[]){
        this.movies = movies;
        this.total_pages = t_pages;
        this.total_results = t_results;
        this.page = page;
    }
}