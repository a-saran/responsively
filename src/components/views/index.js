import React from 'react'
import './style.scss'
import ViewPort from '../viewPort/index';
import { useSelector } from 'react-redux';
import { getSelected, getLink } from '../../actions/viewSelectors';

const Views = () => {
  const selectedViews = useSelector(getSelected);
  const link = useSelector(getLink);

  return (
    <div className='views_container'>
      {selectedViews.map((view, i) => (<ViewPort key={i} keyValue={i} view={view} link={link}/>))}
    </div>
  )
}

export default Views
