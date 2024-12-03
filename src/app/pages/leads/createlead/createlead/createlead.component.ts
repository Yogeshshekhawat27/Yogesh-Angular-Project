import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { Route, Router } from '@angular/router';
import { leads } from 'src/app/pages/interface/leads';
import { LeadService } from 'src/app/pages/service/leads/lead.service';

@Component({
  selector: 'app-createlead',
  templateUrl: './createlead.component.html',
  styleUrls: ['./createlead.component.css'],
  
  
})
export class CreateleadComponent {

  getlist :leads|undefined;
  leadform!:FormGroup;
  constructor( private leadservice:LeadService, private fb:FormBuilder,private router:Router){
  this.leadform = this.fb.group({
    name:[''],
    email:[''],
    contactnumber:[''],
    budget:[''],
  })
  }
  savelist(){
    this.leadservice.savedata(this.leadform.value).subscribe((res)=>
    {
      this.router.navigate(['/app/leads'])
    })
  }

  

}
