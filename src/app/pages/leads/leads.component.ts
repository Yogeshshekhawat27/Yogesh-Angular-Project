import { Component } from '@angular/core';
import { leads } from '../interface/leads';
import { LeadService } from '../service/leads/lead.service';
import { ProjectService } from '../service/project/project.service';
import { ProjectData } from '../interface/project';
import { filter } from 'rxjs';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent {
  leads: leads | undefined;
  project: ProjectData | undefined;

  projectstatus = {
    projects: [],
    clientStatus: [],
    limit: 10,
    page: 1,
    verifiedOn: '',
  };

  constructor(
    private leadservice: LeadService,
    private projectservice: ProjectService
  ) {
    this.grtAllProject();

    this.getlead();
  }
  filter(data: any) {
    this.project?.projects;
  }

  getlead() {
    this.leadservice.getlead(this.projectstatus).subscribe((res) => {
      this.leads = res;
    });
  }

  grtAllProject(){
    this.projectservice.getproject({}).subscribe((res) => {
      this.project = res;
    });
  }
}
