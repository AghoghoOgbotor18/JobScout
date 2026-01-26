import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <nav>
            <Navbar />
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
