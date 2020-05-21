import React, { useState } from 'react';
import './styles/global.scss';
//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Views from './components/views';

const App = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar}/>
      <div className="main_container">
        <Sidebar isOpen={isOpen}/>
        <Views />
      </div>
    </div>
  );
}

export default App;
