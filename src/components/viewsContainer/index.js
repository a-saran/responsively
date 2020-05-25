import React, { useState, useEffect, Fragment } from 'react'
import './style.scss'
import { SortableContainer } from 'react-sortable-hoc';
import ViewPort from '../viewPort/index';
import { useSelector, useDispatch } from 'react-redux';
import { getSelected, getLink } from '../../actions/viewSelectors';
import { arrayMove } from '../../utils';
import { SET_SELECTED } from '../../actions/types';

const Container = SortableContainer(({ children }) => (
  <div className='views_container'>
    {children}
  </div>
));

const Views = () => {
  const [isOffline, setIsOffline] = useState(false);
  const selectedViews = useSelector(getSelected);
  const link = useSelector(getLink);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('offline', () => setIsOffline(true))
    window.addEventListener('online', () => setIsOffline(false))
    return () => {
      window.removeEventListener('offline', () => setIsOffline(true))
      window.removeEventListener('online', () => setIsOffline(false))
    }
  }, [])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log({ oldIndex, newIndex })
    const newArray = arrayMove(selectedViews, oldIndex, newIndex);
    dispatch({ type:SET_SELECTED, payload: { newViews: newArray } })
  }

  return (
    <div className='container'>
      {isOffline && (<div className='offline'> No internet Connection</div>)}
      <Container onSortEnd={onSortEnd} axis='x' useDragHandle>
        {selectedViews.map((view, i) => (
          <ViewPort key={i} keyValue={i} view={view} link={link} index={i}/>
        ))}
      </Container>
    </div>
  )
}

export default Views
