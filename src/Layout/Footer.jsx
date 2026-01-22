import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const jobs = ["Find Jobs", "Career guide", "Learn new skills", "Remote jobs", "Entry-level jobs", "Mid-level jobs", "senior level jobs"];
    const recruiters = ["Hire with JobScout", "Pricing", "Hirwe remote talent"];
    const resources = ["FAQ", "Contact us", "About JobScout", "Careers"];
    const countries = ["Global", "Nigeria", "Kenya", "Uganda", "France"];
    return (
        <div className='bg-black text-white pt-5 px-3 mt-10'>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3'>    
                <div>
                    <h3 className='text-gray-500 text-lg my-4'>Countries</h3>
                    <ul className='flex flex-col gap-3'>
                        {countries.map((country, index) => (
                            <li key={index} className='text-sm'>{country}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-700 text-lg my-4'>For Job Seekers</h3>
                    <ul className='flex flex-col gap-3'>
                        {jobs.map((job, index) => (
                            <li key={index} className='text-sm'>{job}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-700 text-lg my-4'>For Recruiters</h3>
                    <ul className='flex flex-col gap-3'>
                        {recruiters.map((recruiter, index) => (
                            <li key={index} className='text-sm'>{recruiter}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-700 text-lg my-4'>Resources</h3>
                    <ul className='flex flex-col gap-3'>
                        {resources.map((resource, index) => (
                            <li key={index} className='text-sm'>{resource}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex justify-center'>
                <hr className='border border-zinc-500 my-10 w-full' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-5 px-5'>
                <h1 className='text-white text-5xl font-black'>JobScout</h1>
                <p className='text-center md:text-start lg:w-[40%]'>JobScout helps you find roles that fit, learn what matter and act on clear insights with verified opportunity you can trust</p>
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <p>Follow us</p>
                    <div className='flex gap-4'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaYoutube />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-7'>
                <p>&copy; 2026 JobScout Ltd. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
