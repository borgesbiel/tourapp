import {Injectable} from '@angular/core';
import {Init} from '../init-markers'

@Injectable()
export class MarkerService extends Init{
  constructor(){
    super();
    console.log('MarkerService initialized');
    this.load();
  }

  getMarkers(){
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker){
    // Fetch
    var markers = JSON.parse(localStorage.getItem('markers'));
    // Push
    markers.push(newMarker);
    // Set localStorage markers
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker, newLat, newLng){
    // Fetch
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(var i = 0;i < markers.length;i++){
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }
    }

    // Set localStorage markers
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  removeMarker(marker){
    // Fetch
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(var i = 0;i < markers.length;i++){
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
        markers.splice(i, 1);
      }
    }

    // Set localStorage markers
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
