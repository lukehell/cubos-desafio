import { Component, OnInit, Input } from '@angular/core';
import { Simple_Movie } from '../simple-movie';
import { Response } from '../response';
import { MoviesSService } from '../movies-s.service';
import { TransferDataService} from '../transfer-data.service';

@Component({
  selector: 'app-movie-hub',
  templateUrl: './movie-hub.component.html',
  styleUrls: ['./movie-hub.component.css']
})

export class MovieHubComponent implements OnInit {

  @Input() parameters: Parameters;
  
  response : Response;
  teste : number;

  constructor(private movie_service:MoviesSService, public transfer_service: TransferDataService) {
    this.parameters = new Parameters();
    this.teste = 0;
  }

  ngOnInit() {
    this.teste = 42;
    this.transfer_service.setValue(42);
  }

  ngOnDestroy(){
    this.transfer_service.setValue(42);
  }

  getMovies() : void{
    this.movie_service.searchMovies(this.parameters.searchword).subscribe(response => this.response = response);
  }

  changePage(page_to : number) : void{
    this.movie_service.searchMoviesWithPage(this.parameters.searchword, page_to).subscribe(response => this.response = response);
  }

  
}
class Parameters{
  searchword: string;
}