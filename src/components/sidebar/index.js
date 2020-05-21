import React from 'react'
import { useSelector } from 'react-redux'
import { getSelected } from '../../actions/viewSelectors';
import './style.scss'

const Sidebar = ({ isOpen }) => {
  const selectedViews = useSelector(getSelected); 
  console.log(selectedViews)
  return (
    <div className={`sidebar_container${isOpen ? ' open' : ''}`}>
      <h1>sidebar</h1>
    </div>
  )
}

export default Sidebar
