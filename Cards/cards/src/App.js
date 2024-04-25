
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Cardscomponent from "./Components/Cardscomponent.jsx";



function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={< Cardscomponent/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
