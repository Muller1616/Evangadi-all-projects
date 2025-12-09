import axios from 'axios';
// it used to fetach data from the movie database based on the base url

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
// image base url : https://image.tmdb.org/  this link is used to check the cover image of the movies thumbnail
export default instance;