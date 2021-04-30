import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerGeneralComponent } from './container-general/container-general.component';
import { MainAdminComponent } from './container-general/main-admin/main-admin.component';
import { MainComponent } from './container-general/main/main.component';
import { LogueoComponent } from './logueo/logueo.component';
import { LoginGuard } from './services/guard/login.guard';
import { ValidateGuard } from './services/guard/validate.guard';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"prefix"},
  {
    path:"login",
    component:LogueoComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"general",
    component:ContainerGeneralComponent,
    canActivate: [ValidateGuard],
    children:[
        {
          path:"principal",
          component:MainComponent,
        },
        {
          path:"principalAdmin",
          component:MainAdminComponent,
        }
    ]
  },
  {path:'**', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }