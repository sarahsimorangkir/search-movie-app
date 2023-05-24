import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getMovieList = async() => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
  return movie.data.results;
}

export const searchMovie = async(q)=> {
  const findMovie = await axios.get(`${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`);
  return findMovie.data;
}