import React from 'react'
import './style.scss'
import Menu from './Menu';

const Header = ({ toggleSidebar, isOpen }) => {

  return (
    <div className='header'>
      <Menu onClick={toggleSidebar} isOpen={isOpen}/>
    </div>
  )
}

export default Header
