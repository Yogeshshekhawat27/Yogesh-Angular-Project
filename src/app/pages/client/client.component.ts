import { Component } from '@angular/core';
import {  ListService } from "../service/list/list.service";
import { UserResponse } from '../interface/users';
import { ClientData } from '../interface/client';
import { UsersService } from '../service/users.service';
import { ClientService } from '../service/client/client.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],

})
export class ClientComponent {

  clientuser:ClientData| undefined;



  

  
  constructor( private clientservice:ClientService,private fb:FormBuilder){
   this.getclient();

  
  }
  getclient(){
  this.clientservice.getclient({limit:10,page:1}).subscribe((res)=>{
    this.clientuser=res;
  })
  }
  
}
