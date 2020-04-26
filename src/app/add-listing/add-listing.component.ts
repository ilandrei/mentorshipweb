import { Component, OnInit } from '@angular/core';
import * as Mongoose from "mongoose";

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

  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
      });
    }
  }

  async addUser() {
    const uri = "mongodb://localhost:27017/db1";

    Mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    database = Mongoose.connection;

    database.once("open", async () => {
      console.log("Connected to database");
    });

    database.on("error", () => {
      console.log("Error connecting to database");
    });

    var collection = database.collection('CCMentorship');

    const existingUser = await collection.Listing.findOneOrCreate({
      title: this.title,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude
    });
  }

}
