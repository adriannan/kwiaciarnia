function initMap() {
  // Styles a map in night mode.
  var myLatLng = {lat: 53.5650957, lng: 21.217705};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#7A2532'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#7A2532'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#f8d37b'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#A11C31'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#fdc132'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#842131'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#962033'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#AF4C5C'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#f8d37b'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#6b1725'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#7c2f3a'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#7a0e20'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#8a4853'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#7a0e20'}]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

marker.setMap(map);

// function initMap() {
//   // Styles a map in night mode.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 40.674, lng: -73.945},
//     zoom: 12,
//     styles: [
//       {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//       {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//       {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#d59563'}]
//       },
//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#d59563'}]
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [{color: '#263c3f'}]
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#6b9a76'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{color: '#38414e'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#212a37'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#9ca5b3'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry',
//         stylers: [{color: '#746855'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#1f2835'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#f3d19c'}]
//       },
//       {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [{color: '#2f3948'}]
//       },
//       {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#d59563'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{color: '#17263c'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#515c6d'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [{color: '#17263c'}]
//       }
//     ]
//   });
// }