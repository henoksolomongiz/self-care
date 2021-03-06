import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 

const routes: Routes = [{path:'', pathMatch:'full', redirectTo:'login'},{ path: 'login', component: LoginComponent },{ path: 'home', component: HomeComponent, canActivate:[AuthGuardService] },{path:'**',  redirectTo:'login'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
