import React, { useRef } from 'react'
import openai from '../utils/openai';

const GptSearchArea = () => {
const searchText= useRef(null);

  const handleGptSearchClick = async() =>{
    console.log(searchText.current.value)
//Api call
// const gptResults = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: 'Say this is a test' }],
//       model: 'gpt-3.5-turbo',
//     }); 
  }
  
//   main();

  
  
    return (
    <div className='pt-[10%] flex justify-center'>
<form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
    <input
    ref={searchText}
    type="text"
    className='p-4 m-4 col-span-9'
    placeholder='What We Watchin Today?'
    />
    <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>
    Search
    </button>
    </form>      
    </div>
  )
}

export default GptSearchArea
