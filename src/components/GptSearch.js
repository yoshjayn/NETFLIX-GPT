import { COVER } from "../utils/constants"
import GptSearchArea from "./GptSearchArea"

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img 
        src={COVER} 
        alt='cover'/>
      </div>
<GptSearchArea/>
    </div>
  )

}

export default GptSearch
