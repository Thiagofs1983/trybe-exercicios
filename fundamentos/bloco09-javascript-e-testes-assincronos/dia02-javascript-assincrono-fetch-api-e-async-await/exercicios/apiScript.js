// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
  
    fetch(API_URL, myObject)
        .then((response) => response.json())
        .then(({ joke }) => {
          const joker = document.querySelector('#jokeContainer');
          joker.innerHTML = joke;
        });
};


window.onload = () => fetchJoke();