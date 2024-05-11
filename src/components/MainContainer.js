import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videocover from './Videocover'
function MainContainer() {
    const movies=useSelector(store=>store.movie?.nowPlaying)
    console.log("movies=", movies)
    if(!movies) return;
    
    const Mainmovie=movies[0];
     const { original_title, overview }= Mainmovie;
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <Videocover/>
    </div>
  )
}
export default MainContainer;

