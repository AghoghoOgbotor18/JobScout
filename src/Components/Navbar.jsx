import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ search, setSearch, setPage }) => {
  return (
    <div className='container mx-auto'>
      <div className='mx-3 bg-zinc-100 text-black py-4 px-3 flex justify-between items-center fixed inset-0 z-10 h-15 rounded-md my-4 shadow-lg'>
            <h2 className='text-2xl font-black'>JobScout</h2>
            <div className='flex gap-5 items-center font-medium text-lg'>
              <NavLink to="/" className={({isActive}) => isActive ? "text-green-800" : "text-black/80"}>Home</NavLink>
              <NavLink to="/saved" className={({isActive}) => isActive ? "text-green-800" : "text-black/70"}>Saved Jobs</NavLink>
              <input type='search' value={search} placeholder="search jobs" onChange={(e) => {setSearch(e.target.value); setPage(1);}}  className='border-2 border-green-800 bg-green-50 p-2 rounded-md text-black/60 outline-0'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
