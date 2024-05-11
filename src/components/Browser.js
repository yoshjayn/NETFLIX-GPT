import Header from './Header'
import MainContainer from './MainContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browser = () => {
  // async function getmoviedata(){
  //   try{
  //     const data= fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',Api_options );
  //     const datajson=await data?.json();
  //     console.log("datajosn=",datajson)
  //   }catch(err){
  //     console.log("err=",err.message);
  //   }
  // }
  // useEffect(()=>{
  //   getmoviedata();
  // },[]);
  useNowPlayingMovies();
  return (
    <div>
        <Header/>
        <div className='absolute top-24'>
          <MainContainer/>
        </div>
    </div>
  )
}

export default Browser