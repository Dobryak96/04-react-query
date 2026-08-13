import axios from "axios";
import type { Movie } from "../types/movie";

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string,
  page: number = 1,
): Promise<TMDBResponse> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<TMDBResponse>(BASE_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};