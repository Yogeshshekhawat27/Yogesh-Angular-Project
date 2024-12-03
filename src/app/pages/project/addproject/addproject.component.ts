import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../service/project/project.service';
import { Router } from '@angular/router';
import { ProjectComponent } from '../project.component';
import { ProjectData } from '../../interface/project';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {
  isLinear: any;
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  project: ProjectData | undefined;
  projectform: FormGroup;
  constructor(private projectservice: ProjectService, private fb: FormBuilder, private router: Router) {
    this.projectform = this.fb.group({
// city:[''],
// cpl:[''],
// description :[''],     
endDate:[''],
// icon: [''],
// landingPageURL:  [''],      
// priceCostFrom:[''],
projectName   :[''],
// projectType  :[''],
// propertyTypes    :[''],
startDate     :[''],
state       :[''],
// tat      :[''],
totalLeadsToBeDel:[''],

    })

  }
  prosave(){ this.projectservice.saveproject(this.projectform.value).subscribe((res)=>{
    this.router.navigate(['/app/project'])
  })}
}
