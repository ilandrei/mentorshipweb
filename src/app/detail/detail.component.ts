import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/models/listing.model';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = "";
  listing: Listing;
  sub: any;
  constructor(private route: ActivatedRoute, private listingService: ListingsService) { console.log('a') }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.listingService.getListing(this.id).subscribe((listing) => {
        this.listing = listing[0];
        localStorage.setItem('latitude', this.listing.latitude)
        localStorage.setItem('longitude', this.listing.longitude)
        console.log(this.listing)
      })
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

