import React, { useState } from 'react'
import './style.scss'
import { getHeightAndWidth } from '../../utils';
// import { useDispatch } from 'react-redux';

const ViewPort = ({
  view: { size, name },
  link,
}) => {
  const [zoom, setZoom] = useState(0.7);
  const [rotate, setRotate] = useState(false);
  const [width, height] = getHeightAndWidth(size);

  const increaseZoom = () =>  zoom < 1.3 ? setZoom(zoom + 0.1) : null
  const decreaseZoom = () => zoom > 0.4 ? setZoom(zoom - 0.1) : null

  return (
    <div className='viewport' style={{ transform: `scale(${zoom})` }}>
      <div className="options">
        {/* TODO */}
          {/* dragHandle */}
        <span className='zoom' onClick={increaseZoom} > + </span>
        <span className='zoom' onClick={decreaseZoom} > - </span>
        <span onClick={() => setRotate(!rotate)}>rotate</span>
      </div>
      
      <iframe src={link} title={name} frameborder="0" height={rotate ? width : height} width={rotate? height:width}/>
    </div>
  )
}

export default ViewPort
