import * as axios from "axios";

export const apiMovie = axios.create();

apiMovie.interceptors.request.use(req => {
  req.headers["Authorization"] =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODFkZmU0MDZiMDhjY2FlYjUwMjRmY2QzM2UzYzFlOCIsInN1YiI6IjVjMGU4NTlmYzNhMzY4MjUyYTBjOTM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QG7-vvAvmEXOVUD2ZaONg5e_AHqXaTlPVLeDz7mzhDs";
  return req;
});

export const apiMovieMap = m => ({
  img: "https://image.tmdb.org/t/p/w500" + m.poster_path,
  title: m.title,
  details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
  description: m.overview
});

export default {
  searchMovies: filter => {
    const query =
      "?" +
      Object.keys(filter)
        .map(k => `${k}=${filter[k]}&`)
        .join("");
    return apiMovie
      .get("/search/movie" + query)
      .then(response => response.data.results)
      .then(moviesApi => moviesApi.map(apiMovieMap));
  }
};
