import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listings: any = [];
  selectedListing: Listing;

  constructor() { }

  ngOnInit() {
    this.getListings();
  }

  getListings() {
    // return this.listingService.getListings().subscribe(listings => {
    //   this.listings = listings;
    // })
  }

  onSelect(listing: Listing) {

  }
}
