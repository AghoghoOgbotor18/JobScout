import React,{useState} from 'react'
import Jobs from '../Components/Jobs'
import Hero from '../Components/Hero'
import CTASection from '../Components/CTASection'
import Popular from '../Components/Popular'
import ScrollToTop from '../Components/ScrollToTop'

const Home = ({search, setSearch, page, setPage}) => {

    return (
        <div className='container mx-auto'>
            <ScrollToTop />
            <Hero />
            <CTASection />
            <Popular search={search} setPage={setPage} setSearch={setSearch} />
            <Jobs search={search} page={page} setPage={setPage} />
        </div>
    )
}

export default Home
