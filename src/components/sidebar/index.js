import React from 'react'
import './style.scss'

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar_container${isOpen ? ' open' : ''}`}>
      <h1>sidebar</h1>
    </div>
  )
}

export default Sidebar
