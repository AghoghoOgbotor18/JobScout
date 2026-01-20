import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import JobPage from "./Pages/JobsPage";

const App = () => {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <JobPage />
    </QueryClientProvider>
  )
}

export default App
