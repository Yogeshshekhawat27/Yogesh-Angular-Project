import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../interface/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User1Service {

  private clientapi = 'https://lmsapi.propdoors.com:3000/user/list';
  private saveapi = 'https://lmsapi.propdoors.com:3000/user/signup';
  private deleteurl = 'https://lmsapi.propdoors.com:3000/user/deleteById?id=';


  constructor(private http: HttpClient) { }

  // Get users
  getUsers(data: any): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.clientapi, data);
  }

  // Add user (Save button)
  adduser(data: any): Observable<any> {
    return this.http.post(this.saveapi, data);
  }

  // Delete user (Delete button)
  deleteuser(id: string): Observable<any> {
    const url = `${this.deleteurl}${id}`;  
    return this.http.get<any>(url);  
  }

  updateuser(id:string,data:any):Observable<any>{
    return this.http.put<any>(`https://lmsapi.propdoors.com:3000/user/update/${id}`,data);
  }
}
