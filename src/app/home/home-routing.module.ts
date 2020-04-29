import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'add', component: AddListingComponent },
      { path: 'listing/:id', component: DetailComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
