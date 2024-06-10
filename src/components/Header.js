import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux'
// import GptSearch from './GptSearch'
import { toggleSearchView } from '../utils/gptSlice'
import { LOGO } from '../utils/constants'


const Header = () => {

  const select = useSelector(store => store.user) 
  const navigate = useNavigate()
const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(removeUser())
    navigate("/")
  }
   const handleGptSearchClick =()=>{
    dispatch(toggleSearchView())

   }
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient from-black z-10'>
      <img className='w-44' src = {LOGO} 
       alt='logo'/>
       
      { select &&
      <div className='flex p-2 items-center'>
        <button className='py-2 px-3 mx-4 my-2  w-34 text-black bg-blue-300 rounded-3xl' onClick={handleGptSearchClick}>🔎</button>
        <img 
        className='w-10 h-10'
        src={select?.photoURL} alt="logo" />
        <button className='font-bold text-white py-2 px-4 mx-4 my-2 border-solid border-2 border-white bg-black cursor-pointer' onClick={handleClick}>Sign Out</button>
    </div>
}
    </div>
  )
}

export default Header
