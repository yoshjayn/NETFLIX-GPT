import React, { useEffect, useState } from 'react'
import { Api_options } from '../utils/constants'

const Videocover = () => {
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
        setTrailerId(trailer.key)
        console.log(trailerId)
    }
    useEffect(()=>{
        getMovieVideo()

    },[])

    
  return (
    <div>
  <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default Videocover
