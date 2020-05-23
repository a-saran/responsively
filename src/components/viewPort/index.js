import React, { useState } from 'react'
import './style.scss'
import { getHeightAndWidth } from '../../utils';
import { useDispatch } from 'react-redux';
import { REMOVE_VIEW } from '../../actions/types';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { DragIcon, PlusIcon, MinusIcon, RotateIcon } from '../icons/index';

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

  const increaseZoom = () =>  zoom < 1.3 ? setZoom(zoom + 0.1) : null
  const decreaseZoom = () => zoom > 0.4 ? setZoom(zoom - 0.1) : null
  const deleteView = () => dispatch({ type:REMOVE_VIEW, payload: { id} })

  return (
    <div>
      <div className='viewport' style={{ transform: `scale(${zoom})` }}>
        <div className="options">
          {/* TODO */}
            {/* reload button */}
          <DragHandle />
          <span className='zoom' onClick={increaseZoom} title='Zoom in'><PlusIcon /></span>
          <span className='zoom' onClick={decreaseZoom} title='Zoom out'><MinusIcon /></span>
          <span onClick={() => setRotate(!rotate)} title='Rotate'><RotateIcon /></span>
          <span onClick={deleteView} title='Delete'> {' '}Delete</span>
        </div>

        <iframe
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

export default SortableElement(ViewPort)
