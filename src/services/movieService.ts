import axios from "axios";
import type { Movie } from "../types/movie";

  export const API = axios.create({
  baseURL: `${import.meta.env.VITE_TMDB_URL}`,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` },
});

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}
const fetchMovies = async (
  query: string,
  page: number,
): Promise<FetchMoviesResponse> => {
  const response = await API.get<FetchMoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};

export default fetchMovies;

export interface PopularMovie {
  adult: boolean;
  id: number;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  overview: string;
  popularity: number;
  release_date: string;
  original_language: string;
  original_title: string;
}

export interface UpcomingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

