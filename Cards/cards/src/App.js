import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardscomponent from "./Components/Cardscomponent.jsx";
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header /> {/* Render the Header component */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Cardscomponent />} />
          </Routes>
        </main>
        <Footer /> {/* Render the Footer component */}
      </div>
    </BrowserRouter>
  );
}

export default App;