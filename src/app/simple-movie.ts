export class Simple_Movie{
    poster_path: string;
    vote_average: number;
    titulo: string;
    genres: string[];
    overview: string;
    release_date: string;
    id: number;


    constructor(p_p:string, v_a:number, t:string, g: string[], o:string, r_d: string, id: number){
        this.genres = g;
        this.overview = o;
        this.release_date = r_d;
        this.titulo = t;
        this.vote_average = v_a;
        this.poster_path = p_p;
        this.id = id;
    }
}