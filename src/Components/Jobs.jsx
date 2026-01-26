import React, {useEffect, useRef, useState} from 'react'
import { useJobs } from '../hooks/useJobs';
import { useDebounce } from '../hooks/useDebounce';
import sadFace from "../assets/sadface.png";
import { useSavedJobs } from '../context/SavedJobsContext';


const Jobs = ({search, page, setPage}) => {
    const jobRef = useRef(null);
    const jobsPerPage = 10;
    const debouncedSearch = useDebounce(search, 800);
    const {data: jobs = [], isLoading, error} = useJobs(debouncedSearch);

    const { savedJobs, saveJob, isSaved, removeJob } = useSavedJobs();
    const [show, setShow] = useState(false);
    const [toast, setToast] = useState(null);

    //scroll to job section when next is clicked
    useEffect(() => {
        if(page > 1 && jobRef.current){
            jobRef.current.scrollIntoView({
                behavior: "smooth", block: "start"
            });
        }
    }, [page]);

   

    const start = (page - 1) * jobsPerPage;
    const paginateJobs = jobs.slice(start, start + jobsPerPage);

    return (
        <>
                <div>
                    <div ref={jobRef} className='scroll-mt-20'>
                        <h2 className='font-bold text-3xl ml-3 mt-10 mb-2'>Latest Projects</h2>
                    </div>
                    {isLoading && (
                        <div className='flex items-center justify-center'>
                            <p className='w-20 h-20 border-4 border-green-800 rounded-full border-t-transparent animate-spin bg-transparent text-center my-30'></p>
                        </div>
                    )}
                    {!isLoading && jobs.length === 0 && debouncedSearch && (
                        <div className="flex justify-center items-center mt-40">
                            <h1 className="text-2xl font-bold">
                                No job listings found for
                                <span className="text-green-800"> "{debouncedSearch}"</span>
                            </h1>
                        </div>
                    )}
                    {error && (
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src={sadFace} alt="sad emoji" className='w-50'/>
                            <p className='text-3xl font-bold'>Error loading Jobs</p>
                        </div>
                    )}

                    {show && toast && (
                        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 duration-300">
                            <p className="bg-white shadow-md text-black text-lg rounded-md py-2 px-4">
                                {toast.type === "saved" ? (
                                    `Removed: ${toast.jobTitle}`
                                ) : (`Saved: ${toast.jobTitle}`)}
                            </p>
                        </div>
                    )}
                    
                    <div className='grid grid-cols-1 gap-7 py-3 px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto'>
                        {paginateJobs.map(job => (
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
                                <button className={` ${isSaved(job.id) ? "bg-red-600 hover:bg-red-700": "bg-green-800 hover:bg-green-900"} flex items-center justify-center rounded my-2 gap-0.5 cursor-pointer text-white py-2 px-4`} onClick={() => {
                                    if(isSaved(job.id)){
                                        removeJob(job.id);
                                        setToast({type: "saved", jobTitle: job.title})
                                    } else{
                                        saveJob(job);
                                        setToast({type: "removed", jobTitle: job.title});
                                    }
                                    setShow(true);
                                    setTimeout(() => setShow(false), 3000);
                                }}>
                                    {isSaved(job.id) ? "Remove" : "Save Job"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-end mt-7'>
                    <div className='flex items-center text-white rounded-md px-3 w-fit'>
                        <button className='border-r border-r-white py-1 px-3 bg-green-800 hover:bg-green-900 rounded-tl-sm rounded-bl-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed' disabled={page === 1} onClick={() => setPage(p => (p - 1))}>prev</button>
                        <p className='px-2 bg-green-800 py-1'>{page}</p>
                        <button className='border-l border-l-white py-1 px-3 hover:bg-green-900 bg-green-800 rounded-tr-sm  rounded-br-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed' disabled={start + jobsPerPage >= jobs.length} onClick={() => setPage(p => (p + 1))}>next</button>
                    </div>
                </div>
        </>
    )
}

export default Jobs
