export class Genre{
    id : number;
    name : string;

    constructor (id : number, name : string){
        this.id = id;
        this.name = name;
    }
}

export const all_genres : Genre[] = [
    new Genre(28, "Ação"),
    new Genre(12, "Aventura"),
    new Genre(16, "Animação"),
    new Genre(35, "Comédia"),
    new Genre(80, "Crime"),
    new Genre(99, "Documentário"),
    new Genre(18, "Drama"),
    new Genre(10751, "Família"),
    new Genre(14, "Fantasia"),
    new Genre(36, "História"),
    new Genre(27, "Terror"),
    new Genre(10402, "Música"),
    new Genre(9648, "Mistério"),
    new Genre(10749, "Romance"),
    new Genre(878, "Ficção científica"),
    new Genre(10770, "Cinema TV"),
    new Genre(53, "Thriller"),
    new Genre(10752, "Guerra"),
    new Genre(37, "Faroeste")
];