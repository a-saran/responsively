import React, { useState, useRef, memo } from 'react'
import './style.scss'
import { getHeightAndWidth } from '../../utils';
import { useDispatch } from 'react-redux';
import { REMOVE_VIEW } from '../../actions/types';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import {
  DragIcon,
  PlusIcon,
  MinusIcon,
  RotateIcon,
  RefreshIcon,
  RemoveIcon,
} from '../icons/index';
import { toast } from 'react-toastify';

const DragHandle = SortableHandle(() => (
  <div className="drag-handle">
    <DragIcon />
  </div>
))

const ViewPort = ({
  view: { size, name, id },
  link,
}) => {
  const [zoom, setZoom] = useState(0.7);
  const [rotate, setRotate] = useState(false);
  const [width, height] = getHeightAndWidth(size);
  const dispatch = useDispatch();
  const iframeRef = useRef();

  const increaseZoom = () =>  zoom < 1.3 ? setZoom(zoom + 0.1) : null
  const decreaseZoom = () => zoom > 0.4 ? setZoom(zoom - 0.1) : null
  const deleteView = () => {
    dispatch({ type:REMOVE_VIEW, payload: { id} })
    toast('Device removed')
  }

  const reload = () => {
    const src = iframeRef.current.src
    iframeRef.current.src = src;
  }

  return (
    <div>
      <div className='viewport' style={{ transform: `scale(${zoom})` }}>
        <div className="size">{size}</div>
        <div className="options">
          <DragHandle />
          <span className='zoom' onClick={increaseZoom} title='Zoom in'><PlusIcon /></span>
          <span className='zoom' onClick={decreaseZoom} title='Zoom out'><MinusIcon /></span>
          <span className='rotate' onClick={() => setRotate(!rotate)} title='Rotate'><RotateIcon /></span>
          <span className='refresh' onClick={reload} title='Refresh'><RefreshIcon /></span>
          <span className='remove' onClick={deleteView} title='Delete'> <RemoveIcon /></span>
        </div>

        <iframe
          ref={iframeRef}
          id={`iframe_${id}`}
          src={link}
          title={name}
          frameBorder="0"
          height={rotate ? width : height}
          width={rotate? height : width}
        />
        <p className="name">{name}</p>
      </div>
    </div>
  )
}

export default memo(SortableElement(ViewPort))
