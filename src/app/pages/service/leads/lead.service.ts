import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { leads } from '../../interface/leads';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
private leadapi='https://lmsapi.propdoors.com:3000/lead/list';
 private saveapi='https://lmsapi.propdoors.com:3000/lead';

  constructor(private http:HttpClient) { }
  
getlead(data:any):Observable<leads>{
  return this.http.post<leads>(this.leadapi,data)
}



 savedata(data:any):Observable<leads>{
  return this.http.post<leads>(this.saveapi,data)
 };
}
