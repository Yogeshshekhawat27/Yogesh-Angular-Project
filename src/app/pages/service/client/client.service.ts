import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientData } from '../../interface/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
constructor( private http: HttpClient) { }

getclient(data:any):Observable<ClientData>{
  return this.http.post<ClientData>('https://lmsapi.propdoors.com:3000/client/list',data)
}
}
