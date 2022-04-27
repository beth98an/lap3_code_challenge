import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar} from './components';
import {Home, Search} from "./pages";
import {Footer} from './layout';

function App() {
  return (
    <div className="App">
      <Navbar />
    <main>
      <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path="/search" element= { <Search />} /> */}
      </Routes> 
      <Footer />
    </main>
    </div>
  );
}

export default App;
