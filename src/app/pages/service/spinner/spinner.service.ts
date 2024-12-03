import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface loaderState{
  show:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loadersubject = new Subject<loaderState>();
  loaderState = this.loadersubject.asObservable();

  constructor() { }
   showSpinner(){
    this.loadersubject.next(<loaderState>{show:true})
   }
    hideSpinner(){
      this.loadersubject.next(<loaderState>{show:false})
    }
}
