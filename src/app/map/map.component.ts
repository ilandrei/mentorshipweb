import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.GetMap()
  }

  listing: Listing
  // map: any;
  bubbleLayer: any;


  //A duration for the animation in ms.
  duration = 2500;

  //Max radius of the pulse circle.
  maxRadius = 30;

  GetMap() {
    //Initialize a map instance.
    console.log(Number(localStorage.getItem("latitude").substring(0, 5)))
    console.log(Number(localStorage.getItem("longitude").substring(0, 5)))
    var datasource = new atlas.source.DataSource();
    var map = new atlas.Map('myMap', {
      center: [27.59, 47.14],
      zoom: 9,
      pitch: 60,
      view: 'Auto',

      //Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
      authOptions: {
        authType: <atlas.AuthenticationType>'subscriptionKey',
        subscriptionKey: 'pkk3ZIEvZ2_Hr9TOlfYselPTPEPHIlZ7jujD1311sLg'
      }
    });

    //Wait until the map resources are ready.
    map.events.add('ready', function () {
      //Create a data source to add your data to.
      map.sources.add(datasource);

      //Create some random points
      var points = [];

      // for (var i = 0; i < 100; i++) {
      //     datasource.add(new atlas.data.Point([-122.33 + Math.random() - 0.5, 47.6 + Math.random() / 2 - 0.25]));
      // }

      datasource.add(new atlas.data.Point([27.59, 47.14]))

      datasource.add(points);


      //A bubble layer that will have its radius scaled during animation to create a pulse.
      var bubbleLayer = new atlas.layer.BubbleLayer(datasource, null, {
        color: 'rgb(0, 204, 255)',

        //Hide the stroke of the bubble.
        strokeWidth: 0,

        //Make bubbles stay flat on the map when the map is pitched.
        pitchAlignment: 'map'
      });

      //Add a layers for rendering data.
      map.layers.add([
        bubbleLayer,

        //A symbol layer to be the main icon layer for the data point.
        new atlas.layer.SymbolLayer(datasource, null, {
          iconOptions: {
            //For smoother animation, ignore the placement of the icon. This skips the label collision calculations and allows the icon to overlap map labels.
            ignorePlacement: true,

            //For smoother animation, allow symbol to overlap all other symbols on the map.
            allowOverlap: true
          },
          textOptions: {
            //For smoother animation, ignore the placement of the text. This skips the label collision calculations and allows the text to overlap map labels.
            ignorePlacement: true,

            //For smoother animation, allow text to overlap all other symbols on the map.
            allowOverlap: true
          }
        })
      ]);
    });
  }


}
