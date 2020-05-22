import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/global.scss';
//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Views from './components/viewsContainer';

const App = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Provider store={store}>
      <div className="App">
        <Header toggleSidebar={toggleSidebar}/>
        <div className="main_container">
          <Sidebar isOpen={isOpen}/>
          <Views />
        </div>
      </div>
    </Provider>
  );
}

export default App;
