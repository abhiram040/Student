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
          Create or Activate Association
        </a>


        <a
          className="App-link"
          href="https://professionaldevclub.wordpress.com/students/student-associations-in-uottawa/"
          target="_blank"
          rel="noopener noreferrer"
        >
         uOttawa Student Associations
        </a>
        <a
          className="App-link"
          href="https://professionaldevclub.wordpress.com/students/programs-recognized-by-fswep/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Programs Recognized by FSWEP
        </a>
        <a
          className="App-link"
          href="http://www.site.uottawa.ca/~lpeyton/PDWsyllabus.html?fbclid=IwAR35_2BnSzR1SLBAMn1anb0ChGk_Qv0ChN2v1dZh86P8z7_2JK77x_HrDK8#Groups"
          target="_blank"
          rel="noopener noreferrer"
        >
         Schedule for Winter 2020 Workshops
        </a>


      </header>
    </div>
  );
}

export default App;
