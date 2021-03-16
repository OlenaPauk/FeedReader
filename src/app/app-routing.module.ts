import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'page',component:UserPageComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
