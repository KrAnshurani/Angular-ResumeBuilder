import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


import { AuthGuard } from './auth/auth.guard';
import { CreateResumeComponent } from './auth/Create Resume/createresume.component';
import { ViewResumeComponent } from './auth/View Resume/View Resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path:'createresume',component: CreateResumeComponent},
  {path:'template', component:ViewResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }