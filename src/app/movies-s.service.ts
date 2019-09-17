import { Injectable } from '@angular/core';
import { Result, RootObject } from './movie_loader';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Simple_Movie } from './simple-movie';
import { Response } from './response';
import { Genre, all_genres} from './genres';


@Injectable({
  providedIn: 'root'
})
export class MoviesSService {

  private api_key = "01bedf96ae13c7991b2275c0b2e166fb";
  private img_baseurl = "http://image.tmdb.org/t/p/";
  private img_size = "w185";
  private language = "pt-BR";

  
  searchMovies(name:string): Observable<Response>{
    var movies_list : Simple_Movie[] = [];
    var genres_list : string[] =[];
    var s_response = new Subject<Response>();
    var json_loader = this.http.get<RootObject>(
      "https://api.themoviedb.org/3/search/movie?api_key="+this.api_key+"&query="+name+"&page=1"+"&language="+this.language
    ).subscribe(
      (ro:RootObject) => {
        ro.results.forEach(result => {
          result.genre_ids.forEach(id =>{
            console.log(id);
            genres_list.push(all_genres.find(genre => genre.id === id).name);
          });
          var movie : Simple_Movie = new Simple_Movie(
            this.img_baseurl+this.img_size+result.poster_path,
            result.vote_average, result.title, genres_list,
            result.overview, result.release_date, result.id
          );
          genres_list =[];
          movies_list.push(movie);
        });
        console.log(ro.page);
        console.log(ro.total_pages);
        console.log(ro.total_results);
        var aux = []
        for (var i = 1; i <= ro.total_pages; i++){
          aux.push(i);
        }
        var response : Response = new Response(ro.page, ro.total_results, aux, movies_list);
        s_response.next(response);
      }
    )
    
    return s_response.asObservable();
  }

  searchMoviesWithPage(name: string, page: number): Observable<Response>{
    var movies_list : Simple_Movie[] = [];
    var genres_list : string[] = [];
    var s_response = new Subject<Response>();
    var json_loader = this.http.get<RootObject>(
      "https://api.themoviedb.org/3/search/movie?api_key="+this.api_key+"&query="+name+"&page="+page+"&language="+this.language
    ).subscribe(
      (ro:RootObject) => {
        ro.results.forEach(result => {
          result.genre_ids.forEach(id => {
            genres_list.push(all_genres.find(genre => genre.id === id).name);
          });
          var movie : Simple_Movie = new Simple_Movie(
            this.img_baseurl+this.img_size+result.poster_path,
            result.vote_average, result.title, genres_list,
            result.overview, result.release_date, result.id
          );
          genres_list = [];
          movies_list.push(movie);
        });
        var aux = []
        for (var i = 1; i <= ro.total_pages; i++){
          aux.push(i);
        }
        var response : Response = new Response(ro.page, ro.total_results, aux, movies_list);
        s_response.next(response);
      }
    )
    
    return s_response.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }
}
