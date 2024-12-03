import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { LayoutComponent } from './pages/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { ProjectComponent } from './pages/project/project.component';
import { CreateleadComponent } from './pages/leads/createlead/createlead/createlead.component';
import { AddprojectComponent } from './pages/project/addproject/addproject.component';
import { AddclientComponent } from './pages/client/addclient/addclient.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: AppComponent,
    children: [
      
      { path: 'users', component: UsersComponent },
      {path:'layout',component:LayoutComponent},
      {path:'client',component:ClientComponent},
      {path:'leads',component:LeadsComponent},
      {path:'createlead', component:CreateleadComponent},
      {path:'project',component:ProjectComponent},
      {path:'addproject',component:AddprojectComponent},
      {path:'addclient',component:AddclientComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
