import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectData } from '../../interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
private projectapi = "https://lmsapi.propdoors.com:3000/project/list";
private savepro ='https://lmsapi.propdoors.com:3000/project';

  constructor(private http :HttpClient) { }

getproject(data:any):Observable<ProjectData>{
  return this.http.post<ProjectData>(this.projectapi,data)
}


saveproject(data:any):Observable<ProjectData>{
  return this.http.post<ProjectData>(this.savepro,data)
}

}