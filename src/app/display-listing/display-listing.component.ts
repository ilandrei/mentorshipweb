import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-display-listing',
  templateUrl: './display-listing.component.html',
  styleUrls: ['./display-listing.component.css']
})
export class DisplayListingComponent implements OnInit {

  listing: Listing = new Listing({guid: "123123",
		title: "listing title",
		description: "info 1",
		latitude: "1231541",
    longitude: "12312233"
  });

  constructor() { }

  ngOnInit() {
  }

}
