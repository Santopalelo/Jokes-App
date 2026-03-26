const btn = document.querySelector(".btn");
const jokeContainer = document.querySelector(".jokesContainer");
const joke = document.querySelector(".joke")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist"



btn.addEventListener("click", async ()=>{
  try {
    joke.innerHTML = "Fetching jokes .....";
    const response = await fetch(url);
    const Data = await response.json() ;
    if(Data.type === "single"){
      joke.innerHTML = Data.joke;
    }
    else{
      joke.innerHTML = `${Data.setup} <br> ${Data.delivery}`;
    }
    console.log(Data);
  } catch (error) {
    joke.innerHTML = "Oops couldn't fetch jokes"
    console.error(error.message);
  }
})