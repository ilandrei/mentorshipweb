import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { DisplayListingComponent } from './display-listing/display-listing.component';
import { AuthStatus } from './services/AuthStatus';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthStatus] },
  { path: 'listing/:id', component: DisplayListingComponent, canActivate: [AuthStatus] },
  { path: '**', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthStatus] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
