  import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users.service';  
import { first } from 'rxjs';
import { User, UserResponse } from '../interface/users';
import { User1Service } from '../service/user1.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
 Userlist :UserResponse| undefined;
 saveform : FormGroup;
 
 constructor( private users1service: User1Service,private fb:FormBuilder, private router: Router){
 this.saveform = this.fb.group ({
  firstName: "",  lastName: "", email: "",contactNumber:"",
 })


  this.users1service.getUsers({}).subscribe((res)=>{
    this.Userlist=res;
  })

 }
//  onsave(){ this.users1service.saveuser(this.saveform.value).subscribe((res)=>{
//   alert('User add successfully')
//   this.router.navigate(['/app/users'])
//  })

//  }

 deleteusersbyid(id:string){
  this.users1service.deleteuser(id).subscribe((res) => {
    alert('User deleted successfully');
    window.location.reload();
  });
 }

 submitform(){
  // console.log(this.saveform.value);
   this.users1service.adduser(this.saveform.value).subscribe(()=>{
    alert('added');
    console.log(this.saveform.value);
   })
 }


}