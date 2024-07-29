
const axios = require('axios');
const cache = require('../utils/cache');

const API_KEY = `11977b934e6b2902cdba22bd41d18c38`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

console.log(`Using API Key: ${API_KEY}`);

const getPlaylistByCity = async (city) => {
  const cachedData = cache.get(city);
  if (cachedData) {
    return cachedData;
  }

  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  const temperature = response.data.main.temp;
  let playlist;

  if (temperature > 25) {
    playlist = { genre: 'Pop', songs: ['Song 1', 'Song 2', 'Song 3'] };
  } else if (temperature >= 10 && temperature <= 25) {
    playlist = { genre: 'Rock', songs: ['Song 4', 'Song 5', 'Song 6'] };
  } else {
    playlist = { genre: 'Classical', songs: ['Song 7', 'Song 8', 'Song 9'] };
  }

  cache.set(city, playlist);
  return playlist;
};

module.exports = { getPlaylistByCity };
            