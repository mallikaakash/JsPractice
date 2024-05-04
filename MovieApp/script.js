async function fetchMovie() {
  const movieId = document.getElementById("submit").value;
  const url = `https://imdb146.p.rapidapi.com/v1/name/?id=nm0000093`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "022568d9d0msh870ad7847db18d4p1807ddjsn502315d0ff8a",
      "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
