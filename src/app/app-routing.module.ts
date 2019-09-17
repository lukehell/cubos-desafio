import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MovieHubComponent } from './movie-hub/movie-hub.component';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';

const routes: Routes = [
  {path: 'movies-hub', component: MovieHubComponent},
  {path: 'detailed-movie/:id', component: DetailedMovieComponent},
  {path: '', redirectTo:'/movies-hub', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
