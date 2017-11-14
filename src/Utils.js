const apiKey = 'AIzaSyDh2BMWgF3nDnEDVdT7hcqX7mbJuJ_PLzo';

const getCity = (coords) => {

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&result_type=locality&key=${apiKey}`

  let address = '';

  fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log('data:', data);
    address = data.results[0].formatted_address;
  })
  .catch(function(err) {
    console.log('err', err);
  });

  return address;

};

const getLocation = () => {
  const location = {};

  const currentLocation = navigator.geolocation.getCurrentPosition((resp) => {
    console.log('resp', resp);
    location.longitude = resp.coords.longitude;
    location.latitude = resp.coords.latitude;
    console
    location.address = getCity(location);

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
