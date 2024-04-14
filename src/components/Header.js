import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux'

const Header = () => {
  // const user = useSelector((store)=> store.user)
  // if(user =! null) console.log("user", user.uid)
  const select = useSelector(store => store.user) 
  const navigate = useNavigate()
const dispatch = useDispatch()
  // console.log("select =", select)
  const handleClick = () => {
    dispatch(removeUser())
    navigate("/")
  }
  
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
       alt='logo'/>
       
      { select &&
    <div className='flex justify-between w-32 items-center'>
        <img 
        className='w-10 h-10'
        src={select?.photoURL} alt="logo" />
        <button className='font-bold text-white cursor-pointer' onClick={handleClick}>(Sign Out)</button>
    </div>
}
    </div>
  )
}

export default Header
