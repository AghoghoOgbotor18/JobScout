import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { fetchJobs } from '../Api/jobs.api';

export const useJobs = (search) => {
  return useQuery({
    queryKey: ["jobs", search],
    queryFn: ()=> fetchJobs(search),
    staleTime: 60 * 1000 * 5
  });
}

