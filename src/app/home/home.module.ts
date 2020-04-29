import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../services/listings.service';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
