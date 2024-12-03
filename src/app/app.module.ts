import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './pages/users/users.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { CustomInterceptor } from './pages/service/custom.interceptor';
import { UsersService } from './pages/service/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LeadsComponent } from './pages/leads/leads.component';
import { ProjectComponent } from './pages/project/project.component';
import { CreateleadComponent } from './pages/leads/createlead/createlead/createlead.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { AddprojectComponent } from './pages/project/addproject/addproject.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddclientComponent } from './pages/client/addclient/addclient.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    
    UsersComponent,
    ClientComponent,
    LeadsComponent,
    ProjectComponent,
    CreateleadComponent,
    SpinnerComponent,
    AddprojectComponent,
    AddclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule

    
   

  ],
  providers: [UsersService,
{
 provide:HTTP_INTERCEPTORS,
 useClass:CustomInterceptor,
multi:true

}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
