import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieHubComponent } from './movie-hub/movie-hub.component';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieHubComponent,
    DetailedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
