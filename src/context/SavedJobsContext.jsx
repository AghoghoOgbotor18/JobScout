import { createContext, useContext, useEffect, useState } from "react";

const SavedJobsContext = createContext();

export const SavedJobsProvider = ({children}) => {
    const [savedJobs, setSavedJobs] = useState(() => {
        const stored = localStorage.getItem("savedJobs");
        return stored ? JSON.parse(stored) : [];
    });

    //store items
    useEffect(() => {
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    }, [savedJobs]);

    //check if job is saved already
    const saveJob = (job) => {
        setSavedJobs((prev) => {
            const exists = prev.find((j) => j.id === job.id);
            if (exists) return prev;
            return [...prev, job];
        })
    }

    //delete a job
    const removeJob = (jobId) => {
        setSavedJobs((prev) => prev.filter((job) => job.id !== jobId));
    }

    //save jobs
    const isSaved = (jobId) => {
        return savedJobs.some((job) => job.id === jobId);
    }

    return (
        <SavedJobsContext.Provider value={{savedJobs, saveJob, isSaved, removeJob}}>
            {children}
        </SavedJobsContext.Provider>
    );
};

export const useSavedJobs = () => useContext(SavedJobsContext);