import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

const Navbar = ({ search, setSearch, setPage }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-100 shadow-md">
        <div className='mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <h2 className='text-2xl font-black'>JobScout</h2>

            {/* Desktop nav */}
            <div className='md:flex gap-5 items-center font-medium text-lg hidden'>
              <ul className='flex gap-6 items-center'>
                <li>
                  <NavLink to="/" className={({isActive}) => isActive ? "text-green-800" : "text-black/80"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/saved" className={({isActive}) => isActive ? "text-green-800" : "text-black/70"}>Saved Jobs</NavLink>
                </li>
              </ul>
              <input type='search' value={search} placeholder="search jobs" onChange={(e) => {setSearch(e.target.value); setPage(1);}}  className='border-2 border-green-800 bg-green-50 p-2 rounded-md text-black/60 outline-0'/>
            </div>

            {/*Navbar icon */}
            <button onClick={toggleOpen} className='md:hidden cursor-pointer'>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile view */}
      {isOpen && (
        <div className='md:hidden bg-white fixed top-16 left-0 right-0 z-40 duration-300 shadow-md'>
          <div className=" flex flex-col items-center justify-center gap-4 p-6 space-y-4">
            <NavLink to="/" className={({isActive}) => isActive ? "text-green-800" : "text-black/80"} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/saved" className={({isActive}) => isActive ? "text-green-800" : "text-black/70"} onClick={() => setIsOpen(false)}>Saved Jobs</NavLink>
            <input type='search' value={search} placeholder="search jobs" onChange={(e) => {setSearch(e.target.value); setPage(1);}}  className='border-2 border-green-800 bg-green-50 p-2 rounded-md text-black/60 outline-none'/>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
 