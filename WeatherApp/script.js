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
    const datax = JSON.parse(result).data[0].weather;
    console.log(datax);
    return datax;
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
    const data = await getWeather(latitude, longitude);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function start() {
  const zipcode = document.getElementById("zipcode").value;
  const data = await getCoordinates(zipcode);

  const container = document.getElementById("container");
  if (container.childElementCount > 0)
    container.removeChild(container.firstChild);
  const weatherTab = document.createElement("div");
  weatherTab.innerHTML = data;
  container.appendChild(weatherTab);
}
