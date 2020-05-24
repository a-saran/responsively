import React from 'react'
import { useDispatch } from 'react-redux';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { REMOVE_VIEW } from '../../actions/types';
import { DragIcon, RemoveIcon } from '../icons/index';

const DragHandle = SortableHandle(() => (
  <div className="drag-handle">
    <DragIcon />
  </div>
))

const Menu = ({ view: { name, id, size } }) => {
  const dispatch = useDispatch();
  return (
    <div className="menu">
      <DragHandle />
      <div>
        <div>{name}</div>
        <div className='size'>{size}</div>
      </div>
      <span className='close' onClick={() => dispatch({type: REMOVE_VIEW, payload: { id }})}>
        <RemoveIcon color2='#7b7b7b' color1='#1f2021' width='18px'/>
      </span>
    </div>
  )
}

export default SortableElement(Menu)