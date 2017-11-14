const apiKey = 'AIzaSyDh2BMWgF3nDnEDVdT7hcqX7mbJuJ_PLzo';

const getCity = (coords) => {

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&result_type=locality&key=${apiKey}`;

  return new Promise((resolve, reject) => {

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      resolve(data.results[0].formatted_address);
    });

  });

};

const getCoords = () => {

  return new Promise((resolve, reject) => {

    const coords = {};
    const currentLocation = navigator.geolocation.getCurrentPosition((resp) => {

      coords.longitude = resp.coords.longitude;
      coords.latitude = resp.coords.latitude;
      getCity(coords).then((city) => {
        coords.address = city;
        resolve(coords);
      });

    }, (err) => {

      console.log('err:', err);
      reject(err);

    }, (ops) => {

      console.log('ops:', ops);

    });

  });
};

const getLocation = new Promise((resolve, reject) => {

  const coords = getCoords()
  .then((data) => {

    console.log('data', data);
    resolve(data);

  });

});

export {
  getLocation
};
