import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
   console.log("movies",movies)
   if (!movies) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return (
    <div className='px-6 py-2'>
    <h1 className='text-3xl font-bold text-white pb-2'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      <div className='flex'>
        {movies.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
      </div>
    </div>
    </div>
  )
}

export default MovieList
