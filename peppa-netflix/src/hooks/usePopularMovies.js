import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";

const usePopularPlayingMovies = () => {
const dispatch = useDispatch();

  const getPopularPlayingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
  const json = await data.json();
  dispatch(addPopularMovies(json.results));
  console.log("ln13--->",json.results)
  }

  useEffect(() => {
    getPopularPlayingMovies();
  }, []);
} 

export default usePopularPlayingMovies;