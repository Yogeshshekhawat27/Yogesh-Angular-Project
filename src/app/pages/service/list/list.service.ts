import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listurl='https://lmsapi.propdoors.com:3000/client/list'
  
  constructor(private http: HttpClient) { }

  list(data:any): Observable<any> {
    return this.http.post<any>(this.listurl,data);
  }
}
