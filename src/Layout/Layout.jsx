import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import { Outlet } from 'react-router-dom';

const Layout = ({search, setSearch, setPage}) => {
  return (
    <>
        <nav>
            <Navbar search={search} setSearch={setSearch} setPage={setPage} />
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Layout
