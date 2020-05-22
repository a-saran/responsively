import React from 'react'
import './style.scss'
import { getHeightAndWidth } from '../../utils';
import { useDispatch } from 'react-redux';

const ViewPort = ({
  view: { size, name },
  link,
}) => {
  const [width, height] = getHeightAndWidth(size);

  return (
    <div className='viewport'>
      <iframe src={link} title={name} frameborder="0" height={height} width={width}/>
    </div>
  )
}

export default ViewPort
