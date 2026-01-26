import React, {useState} from 'react';
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import{ Routes, Route} from "react-router-dom";
import SavedJobs from './Pages/SavedJobs';

const App = () => {

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  return (
    <Routes>
      <Route path="/" element={<Layout search={search} setSearch={setSearch} page={page} setPage={setPage} />}>
        <Route index element={<Home search={search} setSearch={setSearch} page={page} setPage={setPage} />} />
        <Route path="saved" element={<SavedJobs />} />
      </Route> 
    </Routes>
  )
}

export default App
