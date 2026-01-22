import React from 'react'

const Popular = () => {
    const items = ["Teaching, Training", "Business, Strategic Management", "Accounting, finance, banking, insurance", "Information Technology, Software development, Data", "Sales, Marketing, Promotion", "Project, Management"]
    return (
        <div className='container px-3 my-10 overflow-x-hidden'>
            <h2 className='text-lg font-bold my-3'>Popular Searches</h2>
            <div className='flex gap-2 flex-wrap '>
                {items.map((item, id) => (
                    <button key={id} className='py-2 px-3 rounded-2xl bg-green-100 text-black/80 hover:bg-black hover:text-white duration-100'>{item}</button>
                ))}
            </div>
        </div>
    )
}

export default Popular
