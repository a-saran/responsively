import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_VIEW } from '../../actions/types';
import { getSelected } from '../../actions/viewSelectors';
import './style.scss'

const Sidebar = ({ isOpen }) => {
  const selectedViews = useSelector(getSelected); 
  console.log(selectedViews)
  return (
    <div className={`sidebar_container${isOpen ? ' open' : ''}`}>
      {selectedViews.map(view => (
        <Menu view={view}/>
      ))}
    </div>
  )
}

const Menu = ({ view: {name, id, size} }) => {
  const dispatch = useDispatch();

  return (
    <div className="menu">
      <span>{name}</span>
      <span className='close' onClick={() => dispatch({type: REMOVE_VIEW, payload: { id }})}>X</span>
    </div>
  )
}

export default Sidebar
