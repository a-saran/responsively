import React from 'react';
import './styles/global.scss';
//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Views from './components/views';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <Sidebar />
        <Views />
      </div>
    </div>
  );
}

export default App;
