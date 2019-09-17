import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullMovie } from '../full-movie';
import { MovieDService } from '../movie-d.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.css']
})
export class DetailedMovieComponent implements OnInit {

  id_value : number = 0;
  movie : FullMovie;

  constructor(private route:ActivatedRoute, private movie_service:MovieDService, private location:Location) { }

  ngOnInit() {
    this.id_value = this.getValue();
    this.getMovie();
  }
  
  getValue():number{
    const id = +this.route.snapshot.paramMap.get('id');
    return id;
  }

  getMovie():void{
    this.movie_service.getMovie(this.id_value).subscribe(fullmovie => this.movie = fullmovie);
  }

  goBack():void{
    this.location.back();
  }
}
