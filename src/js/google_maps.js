import loadGoogleMapsAPI from 'load-google-maps-api';

let gmaps = null;

let marker;

export default function googleMaps(store = {})
{
  if (! gmaps) {
    loadGoogleMapsAPI({ "key": "AIzaSyBH27Q4INs-eSWXD7DsDPMfOG2zG7EOidI" }).then(function(googleMaps) {
      gmaps = googleMaps;
      initializeMap(googleMaps, store);
    }).catch((err) => {
      console.error(err);
    });
  }
  return gmaps;
}

export function initializeMap(googleMaps, store, location)
{
  var location = location ? location : { lat: 30, lng: 31.25 };
  var map = new googleMaps.Map(document.getElementById('map'), {
    zoom: 6,
    center: location
  });
  marker = new googleMaps.Marker({
    position: location,
    map: map,
    draggable: true,
    animation: googleMaps.Animation.DROP
  });

  googleMaps.event.addListener(marker, "dragend", function (event) {
    store.trigger("UPDATE_LOCATION", {
      "location": { "lng": this.position.lng(), "lat": this.position.lat() }
    });
  });
}
