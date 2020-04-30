import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuthStatus } from './services/AuthStatus';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'listing/:id', component: DetailComponent, canActivate: [AuthStatus] },
      { path: 'search', component: SearchComponent, canActivate: [AuthStatus] },
      { path: 'home/add', component: AddListingComponent, canActivate: [AuthStatus] },
      { path: '**', redirectTo: 'search', pathMatch: 'full', canActivate: [AuthStatus] },

    ], canActivate: [AuthStatus]
  },

  { path: '**', redirectTo: 'home/search', pathMatch: 'full', canActivate: [AuthStatus] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
