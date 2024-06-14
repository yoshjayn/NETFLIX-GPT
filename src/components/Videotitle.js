import React from 'react'

function Videotitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-[20%] md:pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-l md:text-3xl md:font-bold w-1/3'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-md w-1/4'>{overview}</p>
      <div className='mt-2 md:mt-0'>
        <button 
        className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-l hover:bg-opacity-50 rounded-lg'>
          ▶Play</button>
        <button
        className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'
        >More Info</button>
      </div>
    </div>
  )
}

export default Videotitle