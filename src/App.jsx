import React from 'react';
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import{ Routes, Route} from "react-router-dom";
import SavedJobs from './Pages/SavedJobs';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="saved" element={<SavedJobs />} />
      </Route> 
    </Routes>
  )
}

export default App
