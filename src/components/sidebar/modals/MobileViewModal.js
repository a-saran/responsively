import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { ADD_VIEW } from '../../../actions/types';
import { PlusIcon } from '../../icons';

const MobileViewModal = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState(null);
  const dispatch = useDispatch();

  const addDevice = (device) => {
    setSelectedDevices(device)
  }

  const setSelected = () => {
    dispatch({ type: ADD_VIEW, payload: selectedDevices })
    setOpen(false)
  }

  return (
    <div className='views-modal'>
      <div className="view-btn" onClick={() => setOpen(true)}> <PlusIcon /> {' '}Mobile views</div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        classNames={{
          overlay: 'app-modal-overlay',
          modal: 'app-modal',
          closeIcon: 'close-icon',
        }}
        center
      >
        <h2 className='modal-header'>Simple centered modal</h2>
        <div className="views-list">
          {data.map(device => (
            <div className="device" onClick={() => addDevice(device)}>{device.name}</div>
          ))}
        </div>
        {selectedDevices && (<div className="selected-device">
          <div className="device">{selectedDevices.name}</div>
        </div>)}
        <div className='footer'>
          <button className='btn' onClick={setSelected}>Select</button>
        </div>
      </Modal>
    </div>
  )
}

export default MobileViewModal
