import React from 'react'
import './style.scss'

const Header = ({ toggleSidebar }) => {
  return (
    <div className='header'>
      <button onClick={toggleSidebar}>toggle Sidebar</button>
    </div>
  )
}

export default Header
