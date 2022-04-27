import React from 'react';
import { Routes, Route } from 'react-router-dom'; // using version 6
import { Navbar } from './components';
import { Home, Search } from "./pages";
// import { Footer } from './layout';

function App() {
  return (
    <div id="app">
      <Navbar />
    <main>
      <Routes>
          <Route exact path="/"><Home /></Route>
          <Route path="/search"><Search /></Route>
      </Routes> 
    </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
