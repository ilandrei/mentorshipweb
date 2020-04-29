import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing.model';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listings: Listing[] = [
    //   new Listing({
    //     guid: 1,
    //     title: "Predau smecherie",
    //     description: `Lorem ipsum dolor sit amet, an regione quaeque reprimique mel, eos ad vero
    //     explicari, id his vero dicat docendi. Sea ea antiopam principes concludaturque, quaeque percipitur cotidieque at
    //     eam. Vel falli eligendi in. Duo erat iudicabit at. Ad quo legere mentitum sensibus, eu dicta iriure impedit mei.
    //     Laboramus constituam eum ad, eum ex vocibus maiestatis, in augue vivendum pri.`,
    //     latitude: "54",
    //     longitude: "45",
    //     authorName: "Constantinescu Vlad"
    //   }),
    //   new Listing({
    //     guid: 1,
    //     title: "Predau bani",
    //     description: `Lorem ipsum dolor sit amet, an regione quaeque reprimique mel, eos ad vero
    //     explicari, id his vero dicat docendi.`,
    //     latitude: "54",
    //     longitude: "45",
    //     authorName: "Andrei Ilie"
    //   }), new Listing({
    //     guid: 1,
    //     title: "Predau smecherie",
    //     description: `Lorem ipsum dolor sit amet, an regione quaeque reprimique mel, eos ad vero
    //     explicari, id his vero dicat docendi. Sea ea antiopam principes concludaturque, quaeque percipitur cotidieque at
    //     eam. Vel falli eligendi in. Duo erat iudicabit at. Ad quo legere mentitum sensibus, eu dicta iriure impedit mei.
    //     Laboramus constituam eum ad, eum ex vocibus maiestatis, in augue vivendum pri.`,
    //     latitude: "54",
    //     longitude: "45",
    //     authorName: "Constantinescu Vlad"
    //   }),
    //   new Listing({
    //     guid: 1,
    //     title: "Predau bani",
    //     description: `Lorem ipsum dolor sit amet, an regione quaeque reprimique mel, eos ad vero
    //     explicari, id his vero dicat docendi.`,
    //     latitude: "54",
    //     longitude: "45",
    //     authorName: "Andrei Ilie"
    //   }), new Listing({
    //     guid: 1,
    //     title: "Predau smecherie",
    //     description: `Lorem ipsum dolor sit amet, an regione quaeque reprimique mel, eos ad vero
    //     explicari, id his vero dicat docendi. Sea ea antiopam principes concludaturque, quaeque percipitur cotidieque at
    //     eam. Vel falli eligendi in. Duo erat iudicabit at. Ad quo legere mentitum sensibus, eu dicta iriure impedit mei.
    //     Laboramus constituam eum ad, eum ex vocibus maiestatis, in augue vivendum pri.`,
    //     latitude: "54",
    //     longitude: "45",
    //     authorName: "Constantinescu Vlad"
    //   }),
    //   new Listing({
    //     guid: 1,
    //     title: "Predau bani",
    //     description: `Lorem ipsum dolor sit amet, an regione quaeque reprimique mel, eos ad vero
    //     explicari, id his vero dicat docendi.`,
    //     latitude: "54",
    //     longitude: "45",
    //     authorName: "Andrei Ilie"
    //   })
  ];
  showingListings: Listing[] = [];
  selectedListing: Listing;

  constructor(private listingService: ListingsService) { }

  ngOnInit() {
    this.getListings();
  }

  getListings() {
    this.listingService.getListings().subscribe(listings => {
      this.listings = listings;
      console.log(this.listings);
      this.showingListings = this.listings;
    })

  }

  onSelect(listing: Listing) {

  }
  onSearchChange(searchValue: string): void {
    if (searchValue === "") {
      this.showingListings = this.listings;
    }
    else {
      this.showingListings = this.listings.filter(listing => listing.title.includes(searchValue) || listing.description.includes(searchValue) || listing.authorName.includes(searchValue));
    }
  }
}
