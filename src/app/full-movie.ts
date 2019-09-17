import { Simple_Movie } from './simple-movie';

export class FullMovie extends Simple_Movie{
    
    status:string;
    idioma:string;
    duracao_h:number;
    duracao_m:number;
    budget:number;
    receita:number;
    video:boolean

    constructor(p_path:string, vote_a:number, title:string, genres:string[],
        overview:string, r_date:string, id:number, status:string, idioma:string,
        duracao_h:number, budget:number, receita:number, video:boolean,
        duracao_m:number){

            super(p_path, vote_a, title, genres, overview, r_date, id);
            this.status = status;
            this.idioma = idioma;
            this.duracao_h = duracao_h;
            this.duracao_m = duracao_m;
            this.budget = budget;
            this.receita = receita;
            this.video = video;
    }
}