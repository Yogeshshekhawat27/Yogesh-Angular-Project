import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { loaderState, SpinnerService } from '../service/spinner/spinner.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  display: boolean = false;
  private _loaderStateChanged!:Subscription;

  constructor( private service : SpinnerService){}
  ngOnInit():void{
this._loaderStateChanged= this.service.loaderState.subscribe((_state:loaderState)=>{
  this.display = _state.show
})
  }

   ngOnDestroy(){
    this._loaderStateChanged.unsubscribe();
   }
}
