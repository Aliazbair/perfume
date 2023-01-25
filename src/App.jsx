import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className=''>
      <Navbar />

      <main className='max-w-7xl mx-auto px-10'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      </main>
    </div>
  );
}

export default App;
