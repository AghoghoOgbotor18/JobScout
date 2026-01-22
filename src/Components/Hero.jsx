import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-col justify-center items-center md:justify-between lg:flex-row gap-4 lg:gap-2 md:px-10 px-3 py-30'>
            <div className='flex flex-col gap-10 lg:gap-6 text-center lg:text-start'>
                <h2 className='font-bold text-5xl sm:text-6xl md:text-7xl'>Find your dream job in Nigeria</h2>
                <p>Built for Job Seekers. Trusted by career builders and employers. Get accurate job matches, learning pathways and career advice for free.</p>
            </div>
            <div className='flex gap-3 lg:w-[80%]'>
                <img src="images/heroImage.png" alt="happy people" className='' />
            </div>
        </div>
    )
}

export default Hero
