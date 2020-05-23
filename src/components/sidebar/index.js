import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import { arrayMove } from '../../utils';
import { getSelected } from '../../actions/viewSelectors';
import './style.scss'
import Menu from './Menu';
import { SET_SELECTED } from '../../actions/types';

const Container = SortableContainer(({ children, isOpen }) => (
  <div className={`sidebar_container${isOpen ? ' open' : ''}`}>
    {children}
  </div>
));

const Sidebar = ({ isOpen }) => {
  const selectedViews = useSelector(getSelected); 
  const dispatch = useDispatch();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newArray = arrayMove(selectedViews, oldIndex, newIndex);
    dispatch({ type:SET_SELECTED, payload: { newViews: newArray } })
  }

  return (
    <Container isOpen={isOpen} onSortEnd={onSortEnd} useDragHandle>
      {selectedViews.map((view, index) => (
        <Menu key={view.id} view={view} index={index} />
      ))}
    </Container>
  )
}


export default Sidebar
