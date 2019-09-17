import { Injectable } from '@angular/core';
import { BelongsToCollection, Genre, ProductionCompany, ProductionCountry, SpokenLanguage, RootObject} from './detailed-movie_loader';
import { Observable, of, Subject} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FullMovie} from './full-movie';


@Injectable({
  providedIn: 'root'
})
export class MovieDService {

  private api_key = "01bedf96ae13c7991b2275c0b2e166fb";
  private img_baseurl = "http://image.tmdb.org/t/p/";
  private img_size = "w185";
  private language = "pt-BR";

  getMovie(id:number): Observable<FullMovie>{
    var s_fullmovie = new Subject<FullMovie>();
    var json_loader = this.http.get<RootObject>(
      "https://api.themoviedb.org/3/movie/"+id.toString()+"?api_key="+this.api_key+"&language="+this.language
    ).subscribe(
      (ro:RootObject) => {
        var genres_list : string[] = [];
        ro.genres.forEach(genre => {
          genres_list.push(genre.name);
        });
        var full_img_path:string = this.img_baseurl+this.img_size+ro.poster_path;
        var hours:number = Math.floor(ro.runtime/60);
        var minutes:number = Math.floor(ro.runtime%60);
        var d_movie:FullMovie = new FullMovie(
          full_img_path, ro.vote_average, ro.title, genres_list, ro.overview,
          ro.release_date, ro.id, ro.status, ro.original_language, hours,
          ro.budget, ro.revenue, ro.video, minutes
        );
        s_fullmovie.next(d_movie);
      }
    )

    return s_fullmovie.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }
}
