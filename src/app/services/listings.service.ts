import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  apiURL = 'http://localhost:3000/api/listing'
  constructor(private http: HttpClient) { }

  getListings() {
    return this.http.get<Listing[]>(this.apiURL + 's');
  }
  postListing(listing: Listing) {
    return this.http.post<void>(this.apiURL, listing);
  }
  getListing(id: string) {
    return this.http.get<Listing>(this.apiURL + '/' + id);
  }
}
