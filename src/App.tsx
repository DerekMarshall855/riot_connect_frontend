import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Component imports
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
