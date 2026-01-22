import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import JobsPage from "./Components/Jobs";
import Home from './Pages/Home';

const App = () => {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
