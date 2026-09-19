import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
   const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();

    const filteredData = json.results.filter((clip) => {
      return clip.type === "Trailer";
    });
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer)) // using store to save trailer id
  };

  useEffect(() => {
    getMovieVideos();
  }, []); 

}

export default useMovieTrailer