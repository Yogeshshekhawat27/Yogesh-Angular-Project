import { Component } from '@angular/core';
import {  HttpClientModule} from "@angular/common/http";
import {  HttpClient} from "@angular/common/http";
import { Router} from '@angular/router';
import { UsersService } from '../service/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../service/spinner/spinner.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform:FormGroup;

  constructor( private usersservice:UsersService, private fb:FormBuilder,private router:Router, private service : SpinnerService){
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]]
    });
   }

onsubmit(){
  if(this.loginform.valid){
    this.service.showSpinner();
    this.usersservice.login(this.loginform.value).subscribe({
      next:(res)=>{
        this.service.hideSpinner();
        alert('login successful'+ res.token);
        this.router.navigate(['/app/layout'])
      },
      error:(error)=>{
        alert('wrong passwaord')
      }
    })
  }
}



}


