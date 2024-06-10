import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";
import { Api_options } from "../utils/constants";


function usePopularMovies() {
   const dispatch=useDispatch()
    async function getPopularMovies(){
        try{ 
          const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
          Api_options );
          const datajson=await data?.json();
          console.log("datajosn=",datajson.results)
          dispatch(addPopular(datajson.results))
        }catch(err){
          console.log("err=",err.message);
        }
      }
      useEffect(()=>{
        getPopularMovies();
      },[]);
}

export default usePopularMovies;