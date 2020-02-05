import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'
function App() {
  return (
  	<BrowserRouter basename={"/parent"}>
    <div className="App">
        Hello from child app 2
        <p>
        	<button 
            onClick={() => {
              console.log("informing parent to change pathName from app2");
              window.e.emit('goTo', {pathName: '/childApp3'});
            }}
          >
            Go to childApp3
          </button>
        </p>
    </div>
    </BrowserRouter>
  );
}

export default App;
