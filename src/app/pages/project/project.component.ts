import { Component } from '@angular/core';
import { ProjectData } from '../interface/project';
import { ProjectService } from '../service/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {



  Projectlist: ProjectData | undefined

  constructor(private projectservice: ProjectService) {

    this.projectservice.getproject({}).subscribe((res) => {

      this.Projectlist = res;
    })

  }

}
