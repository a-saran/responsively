import React from 'react'
import './style.scss'
import Menu from './Menu';

const Header = ({ toggleSidebar }) => {
  return (
    <div className='header'>
      <Menu onClick={toggleSidebar}/>
    </div>
  )
}

export default Header
