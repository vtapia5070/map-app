const apiKey = 'AIzaSyDh2BMWgF3nDnEDVdT7hcqX7mbJuJ_PLzo';

const getCity = (long, lat) => {

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=locality&key=${apiKey}`;

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log('data:', data);
    return data.results[0].formatted_address;
  })
  .catch(function(err) {
    throw new Error(err);
  });

};

function getLocation () {

  const location = {};

  const currentLocation = navigator.geolocation.getCurrentPosition((resp) => {
    location.longitude = resp.coords.longitude;
    location.latitude = resp.coords.latitude;

    location.address = (async () => {

      let resp;

      try {
        resp = await getCity(location.longitude, location.latitude);
      } catch(e) {
        resp = '';
      }

      return resp;

    })();

  console.log('location:', location);

  }, (err) => {
    console.log('err:', err);
  }, (ops) => {
    console.log('ops:', ops);
  });


  return location;

};

export {
  getLocation
};
