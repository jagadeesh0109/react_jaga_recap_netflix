import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularPlayingMovies from "../hooks/usePopularMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularPlayingMovies()
  

  return (
    <div>
      <Header></Header>
    <MainContainer/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
