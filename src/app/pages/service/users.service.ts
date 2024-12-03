import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Admin } from '../interface/admin';
import { User } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiurl ='https://lmsapi.propdoors.com:3000/user/login'
  private dashapi ='https://lmsapi.propdoors.com:3000/dashboard/admin'
  getusers: any;



constructor( private http:HttpClient,private route:Router){}
// login api
login(data:any): Observable<any>{
  return this.http.post(this.apiurl,data).pipe(
    tap((res:any)=>{
      if(res.token){
        sessionStorage.setItem('token',res.token);
      }
    })
  )

}
// gettoken(){
//   return localStorage.getItem('authtoken');
// }
// logout(){
//   localStorage.removeItem('authtoken')
// }
 
// /dashboard api
getAdmin(data:any):Observable<Admin>{
  return this.http.post<Admin>(this.dashapi,data)
}
// users api
// getuser(data:any):Observable<User>{
//   return this.http.post<User>('https://lmsapi.propdoors.com:3000/user/list',data)
// }



}
