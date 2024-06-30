import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom'; 
import Home from './pages/Home'; 
import Shop from './pages/shop';
import styled from 'styled-components';


function App () {
  return (
    <>
   
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Shop />} /> 
      </Routes>
    </Router>
   </>
  );
}

export default App;

