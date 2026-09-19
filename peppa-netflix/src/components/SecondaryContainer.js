import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative pl-12 z-20">
     <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MoviesList title={"Trending"} movies={movies?.popularMovies}/>

      <MoviesList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
     
    </div>
  )
}

export default SecondaryContainer