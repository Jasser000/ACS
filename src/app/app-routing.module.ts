import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessLogComponent } from './pages/access-log/access-log.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PersonnelComponent } from './pages/personnel/personnel.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
const routes: Routes = [
  {
    path: 'login',
    component:  LoginPageComponent
  },
  {
    path: 'signup',
    component:  SignUpPageComponent
  },
  {
    path:'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: '',
    component:  DashboardPageComponent,
    children: [
      {
      path:'personnel',
      component: PersonnelComponent
      },
      {
        path:'access-log',
        component: AccessLogComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
