import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuthStatus } from './services/AuthStatus';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: 'app/home/home.module#HomeModule', canActivate: [AuthStatus] },
  { path: '**', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthStatus] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
