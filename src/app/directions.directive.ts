import {GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive, Input } from '@angular/core';
declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsDirective {
  @Input() origin;
  @Input() destination;
  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }
  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: { lat: 59.932952, lng: 10.735703 },
        destination: { lat: 59.933812, lng: 10.804367 },
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}
