console.log("page loaded");

//Global Constants
const myAPIkey = "CzXtRan91Wp0597awIXFPJGI7qZaee0h";
// havent used these yet
const limit = "12";
const rating = "g";

// this is the only form I have so I dont have to have a name for it
const giphyForm = document.querySelector("form");
const giphyArea = document.querySelector(".gif-area");

// 1. control form submit behavior with JS
console.log("before calling");
giphyForm.addEventListener("submit", getResults);

// This method should use the fetch method with your custom HTTP request.
// Then convert the response to a JSON object and finally return the data of the response.
async function getResults(event) {
  // we need to prevent the default behavior of submitting the form which
  // would reload the page
  console.log("inside function");
  event.preventDefault();
  // getting access to what the user typed into the search bar
  const searchInput = event.target.gif;
  const userGifRequest = searchInput.value;
  const apiUrl =
    "http://api.giphy.com/v1/gifs/search?api_key=" +
    myAPIkey +
    "&q=" +
    userGifRequest;

  // 2. On form submit, go to the giphy API
  const response = await fetch(apiUrl);
  //   console.log(apiUrl);
  const responseData = await response.json();
  console.log("response data", responseData);
  responseData.data.forEach((el) => displayResults(el));
}
// logic for obtaining the url of a gif
function displayResults(giphyData) {
  let urlOfGif = giphyData.images.original.url;
  console.log(urlOfGif);
  giphyArea.innerHTML += `<img src="${urlOfGif}" alt="gif"></img>`;
}
