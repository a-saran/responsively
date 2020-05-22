import React from 'react'
import './style.scss'
import Menu from './Menu';
import Input from './Input';

const Header = ({ toggleSidebar, isOpen }) => {

  return (
    <div className='header'>
      <Menu onClick={toggleSidebar} isOpen={isOpen}/>
      <Input />
      git
    </div>
  )
}

export default Header
