import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/global.scss';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
//components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Views from './components/viewsContainer';

const App = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        transition={Slide}
      />
      <div className="App">
        <Header toggleSidebar={toggleSidebar} isOpen={isOpen}/>
        <div className="main_container">
          <Sidebar isOpen={isOpen}/>
          <Views />
        </div>
      </div>
    </Provider>
  );
}

export default App;
