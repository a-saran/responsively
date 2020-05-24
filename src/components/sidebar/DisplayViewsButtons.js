import React from 'react';
import MobileViewModal from './modals/MobileViewModal';

const DisplayViewOptions = ({ data }) => {
  let mobViews=[];
  let tabViews=[];

  for (let i = 0; i < data.length; i++) {
    if(data[i].device === 'mob') {
      mobViews.push(data[i])
    } else {
      tabViews.push(data[i])
    }
  }

  return (
    <div className='display-views'>
      <div className="display-view">
        <MobileViewModal data={mobViews}/>
      </div>
    </div>
  )
}

export default DisplayViewOptions;
