import { Component } from '@angular/core';
import { MarkerService } from './services/marker.services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  // Zoom level
  zoom: number = 8;
  // Start position
  lat: number = 59.886994;
  lng: number = 10.791321;
  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  // Markers
  markers: marker[] = [
    {
      name: 'Marker 1',
      lat: 59.937894,
      lng: 10.755916,
      draggable: true
    },
    {
      name: 'Marker 2',
      lat: 59.938609,
      lng: 10.761913,
      draggable: true
    }
  ];

  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
  }

  clickedMarker(marker: marker, index: number) {
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event: any) {
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: true
    }

    var newLat = $event.coords.lat
    var newLng = $event.coords.lng

    this._markerService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker() {
    console.log('Adding Marker...');

    if (this.markerDraggable == 'yes') {
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
  }

  removeMarker(marker) {
    console.log('Removing Marker...');
    for (var i = 0; i < this.markers.length; i++) {
      if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
        this.markers.splice(i, 1);
      }
    }

    this._markerService.removeMarker(marker);
  }

  calculateTour(){
    console.log('calculate');
  }
}

//Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
