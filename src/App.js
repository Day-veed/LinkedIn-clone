import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Feed from "./Feed"
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App Body */}
      <div className='app__body'>
        <Sidebar />
        <Feed/>
        {/*Widget*/}
      </div>
      
    </div>
  );
}

export default App;
