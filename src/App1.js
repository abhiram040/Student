import React from 'react';


import './App.css';
import HomepageImage from './HomepageImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage/>
        <p>
          For Students
        </p>
        <a
          className="App-link"
          href="https://professionaldevclub.wordpress.com/students/create-activate-your-association/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create 
        </a>

        
        <a
          className="App-link"
          href="https://professionaldevclub.wordpress.com/students/student-associations-in-uottawa/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Testing
        </a>

      </header>
    </div>
  );
}

export default App;
