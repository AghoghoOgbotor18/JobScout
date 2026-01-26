import React, {useState} from 'react';
import { useSavedJobs } from '../context/SavedJobsContext';
import ScrollToTop from '../Components/ScrollToTop';

const SavedJobs = () => {
    const {savedJobs, removeJob} = useSavedJobs();
    const [show, setShow] = useState(false);
    const [toast, setToast] = useState(null);

    return (
        <>
            <ScrollToTop />
            {show && toast && (
                <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 duration-300">
                    <p className="bg-white shadow-md text-black text-lg rounded-md py-2 px-4">
                        {toast.type === "removed" && (
                            `Removed: ${toast.jobTitle}`
                        )}
                    </p>
                </div>
            )}

            {savedJobs.length === 0 ? (
                <div className='container mx-auto mt-32 text-center'>
                    <h1 className='text-3xl font-bold text-black'>No saved jobs yet.</h1>
                    <p className='text-gray-600 mt-2'>Save jobs to view them here later</p>
                </div>
            ): (
                <div className="container mx-auto my-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedJobs.map((job) => (
                    <div key={job.id} className='flex flex-col gap-4 border-2 border-green-800 rounded-md bg-green-50 px-4 py-3 hover:-translate-y-0.5 duration-75'>
                        <h2 className='font-black text-lg'>{job.title}</h2>
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-lg'>{job.company_name}</p>
                            <div className='flex justify-between gap-2 items-center'>
                                <p className='font-medium text-[16px]'>{job.candidate_required_location}</p>
                                <p className='bg-green-200 rounded-md w-fit px-1.5 py-2 text-sm'>{job.job_type}</p>
                            </div>
                            <p className='bg-green-200 rounded-lg w-fit px-1.5 text-sm'>{job.salary}</p>
                        </div>
                        <button onClick={ () => {
                            removeJob(job.id);
                            setToast({type:"removed", jobTitle: job.title});
                            setShow(true);
                            setTimeout(() => setShow(false), 3000);
                        }} className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Remove</button>
                    </div>
                ))}
            </div>
            )}
            
        </>
    )
}

export default SavedJobs
