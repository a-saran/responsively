import React from 'react'
import { useDispatch } from 'react-redux';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { REMOVE_VIEW } from '../../actions/types';
import { DragIcon } from '../icons/index';

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
      <span>{name}</span>
      <span className='close' onClick={() => dispatch({type: REMOVE_VIEW, payload: { id }})}>X</span>
    </div>
  )
}

export default SortableElement(Menu)