import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import GifListContainer from './components/GifListContainer'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <GifListContainer />
    </div>
  );
}

export default App;
