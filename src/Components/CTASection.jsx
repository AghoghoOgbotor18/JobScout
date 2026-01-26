import React, { useState } from 'react';
import {CountryDropdown} from "react-country-region-selector"

const CTASection = ({search, setSearch, setPage}) => {
    const [country, setCountry] = useState("");
    return (
        <div className='mx-3'>
            <div className='bg-zinc-100 py-5 px-4 rounded-lg shadow-2xl'>
                <p className='font-semibold text-lg mb-3'>Search 247 Jobs</p>
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center max-sm:gap-5 gap-2'>
                    <input type="search" value={search} onChange={(e) => {setSearch(e.target.value); setPage(1);}} placeholder="Type a job title, a company or a keyword" className='max-lg:w-full xl:w-[60%] lg:w-[50%] border border-gray-500 py-3 px-2 rounded-xl outline-0 bg-green-50' />
                    <CountryDropdown value={country} onChange={(val) => setCountry(val)} className='border border-gray-500 py-3 px-2 rounded-xl outline-0 bg-green-50 max-lg:w-full ' />
                    <button className='bg-black hover:bg-black/95 cursor-pointer text-white py-3 px-1.5 xl:px-2 rounded-lg max-lg:w-full'>Find Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default CTASection
