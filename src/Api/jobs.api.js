import axios from "axios";

export const fetchJobs = async (search="") => {
    const res = axios.get(`https://remotive.com/api/remote-jobs?search=${search}`);
    return (await res).data.jobs;
}