import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  public value : number;

  setValue(valor:number){
    this.value = valor;
    console.log(this.value);
  }

  getValue():Observable<number>{
    return of(this.value);
  }

  constructor() { }
}
