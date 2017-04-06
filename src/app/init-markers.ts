export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('No markers found...creating new ones...');

      var markers = [
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

      localStorage.setItem('markers', JSON.stringify(markers))
    }
    else{
      console.log('Loading markers...');
    }
  }
}
