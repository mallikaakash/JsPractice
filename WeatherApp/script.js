async function getWeather(latitude, longitude) {
  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${longitude}&lat=${latitude}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "022568d9d0msh870ad7847db18d4p1807ddjsn502315d0ff8a",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result.weather);
  } catch (error) {
    console.error(error);
  }
}

async function getCoordinates(zipcode) {
  const url = `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode?place_name=${zipcode}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "022568d9d0msh870ad7847db18d4p1807ddjsn502315d0ff8a",
      "X-RapidAPI-Host": "global-zip-codes-with-lat-and-lng.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const latitude = JSON.parse(result)[0].lat;
    const longitude = JSON.parse(result)[0].lng;
    console.log(latitude, longitude);
    getWeather(latitude, longitude);
  } catch (error) {
    console.error(error);
  }
}

async function start() {
  const zipcode = document.getElementById("zipcode").value;
  await getCoordinates(zipcode);
}
