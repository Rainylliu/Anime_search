// document.addEventListener('DOMContentLoaded', function () {
//   const randomButton = document.getElementById('random');
//   const animeInfoContainer = document.getElementById('animeInfoContainer');
//   const apiURL = 'https://anime-search-8ri2.onrender.com/random';

//   randomButton.addEventListener('click', getRandomAnime);

//   function getRandomAnime() {
//       fetch(apiURL, { mode: 'no-cors' })
//           .then(response => response.text())
//           .then(data => {
//               displayAnimeInfo(data);
//           })
//           .catch(error => {
//               console.error('Error fetching random anime:', error);
//           });
//   }

//   function displayAnimeInfo(data) {
//       animeInfoContainer.innerHTML = `<p>${data}</p>`;
//   }
// });
// document.addEventListener('DOMContentLoaded', function () {
//   const randomButton = document.getElementById('random');
//   const animeInfoContainer = document.getElementById('animeInfoContainer');

//   randomButton.addEventListener('click', function () {
//     // Fetch data from the anime search API
//     fetch('https://anime-search-8ri2.onrender.com/random')
//       .then(response => response.json())
//       .then(data => {
//         // Display the retrieved anime information
//         displayAnimeInfo(data, animeInfoContainer);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         animeInfoContainer.innerHTML = 'Error fetching data. Please try again later.';
//       });
//   });

//   function displayAnimeInfo(anime, container) {
//     // Clear previous content
//     container.innerHTML = '';

//     // Check if the API returned valid data
//     if (anime && anime.title) {
//       // Create elements to display the anime information
//       const titleElement = document.createElement('h2');
//       titleElement.textContent = anime.title;

//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = anime.description || 'No description available.';

//       const genreElement = document.createElement('p');
//       genreElement.textContent = `Genre: ${anime.genre || 'N/A'}`;

//       const episodesElement = document.createElement('p');
//       episodesElement.textContent = `Episodes: ${anime.episodes || 'N/A'}`;

//       // Append elements to the container
//       container.appendChild(titleElement);
//       container.appendChild(descriptionElement);
//       container.appendChild(genreElement);
//       container.appendChild(episodesElement);
//     } else {
//       // Display a message if the API response is invalid
//       container.innerHTML = 'Invalid data received from the API.';
//     }
//   }
// });
