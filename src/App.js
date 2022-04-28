import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar} from './components';
import { Home, Search } from "./pages";
import {Footer} from './layout';

function App() {
  return (
    <div id="app">
      <Navbar />
    <main>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/search" element= { <Search />} />
      </Routes> 
    </main>
      <Footer />
    </div>
  );
}

export default App;
