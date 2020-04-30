import { Component, OnInit } from '@angular/core';
import * as Mongoose from "mongoose";
import { Listing } from '../models/listing.model';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { ListingsService } from '../services/listings.service';
import { ToastrService } from 'ngx-toastr';
let database: Mongoose.Connection;

@Component({
  selector: 'add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title = ''
  description = ''
  latitude = ''
  longitude = ''

  constructor(private authService: MsAdalAngular6Service, private listingService: ListingsService, private toastr: ToastrService) { }

  ngOnInit() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     console.log(position.coords);
    //   });
    // }
  }

  async addUser() {

    const listingToAdd: Listing = {
      _id: '1',
      title: this.title,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      authorName: this.authService.LoggedInUserName,
      authorid: this.authService.LoggedInUserEmail
    }
    this.listingService.postListing(listingToAdd).subscribe(() => this.toastr.success('Added', 'Your post was added'));
  }

}
