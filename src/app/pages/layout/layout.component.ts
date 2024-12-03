import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';
import {Admin  } from "../interface/admin";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
constructor( private usersservice:UsersService){
  this.usersservice.getAdmin({type:'All'}).subscribe((res=>{
    this.abc = res;
  }))
}
abc: Admin | undefined;


}
