import React, { useEffect, useState } from 'react'
import { Api_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const Videocover = () => { debugger;
    const trailerVideo = useSelector(store => store.movie?.trailerVideo);
    console.log(trailerVideo)
    const dispatch= useDispatch()
    const [trailerId, setTrailerId] = useState()

    const getMovieVideo=async()=>{ 
        const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en-US",Api_options)
        const dataJs = await data.json();
        console.log("Json Data=", dataJs)
        let trailer = dataJs.results.filter((res)=>{
            return res.type == "Trailer" && res.name == "Official Trailer"
        })
        console.log("Your Trailer=", trailer)
        trailer = trailer.length? trailer : dataJs.results[0]
        // setTrailerId(trailer[0].key)
        console.log(trailerId)
        dispatch(addTrailerVideo(trailer[0]));
          }
    useEffect(()=>{ 
        getMovieVideo()

    },[])

    
  return (
    <div>
    {trailerVideo? <div>
      <iframe width="560" 
    height="315" 
    src={"https://www.youtube.com/embed/"+trailerVideo.key} 
    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
      </div> : 
    <div> Yashaswini
    </div>
    }
    </div>
  )
}

export default Videocover

