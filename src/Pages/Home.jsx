import React,{useState} from 'react'
import Jobs from '../Components/Jobs'
import Navbar from '../Layout/Navbar'
import Hero from '../Components/Hero'
import CTASection from '../Components/CTASection'
import Popular from '../Components/Popular'
import Footer from '../Layout/Footer'

const Home = () => {

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    return (
        <div>
            <header>
                <Navbar search={search} setPage={setPage} setSearch={setSearch} />
            </header>
            <main>
                <Hero />
                <CTASection />
                <Popular search={search} setPage={setPage} setSearch={setSearch} />
                <Jobs search={search} setSearch={setPage} page={page} setPage={setPage} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
