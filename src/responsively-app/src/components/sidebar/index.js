import React, { Fragment, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import { arrayMove } from '../../utils';
import { getSelected, getAllViews } from '../../actions/viewSelectors';
import { SET_SELECTED } from '../../actions/types';
import { AddIcon } from '../icons';
import DisplayViewOptions from './DisplayViewsButtons';
import Menu from './Menu';
import './style.scss'

const Container = SortableContainer(({ children, isOpen }) => (
  <Fragment>
    <div className={`sidebar_container${isOpen ? ' open' : ''}`}>
      {children}
      <div className='add-icon'><AddIcon /></div>
    </div>
  </Fragment>
));

const Sidebar = ({ isOpen }) => {
  const selectedViews = useSelector(getSelected); 
  const allViews = useSelector(getAllViews); 
  const dispatch = useDispatch();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newArray = arrayMove(selectedViews, oldIndex, newIndex);
    dispatch({ type:SET_SELECTED, payload: { newViews: newArray } })
  }

  return (
    <Container isOpen={isOpen} onSortEnd={onSortEnd} axis='y' useDragHandle>
      <div className="menu_container">
        {selectedViews.map((view, index) => (
          <Menu key={view.id} view={view} index={index} />
        ))}
      </div>
      <DisplayViewOptions data={allViews}/>
    </Container>
  )
}


export default memo(Sidebar);
