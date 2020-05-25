import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { ADD_VIEWS } from '../../../actions/types';
import { PlusIcon } from '../../icons';

const MobileViewModal = ({ data, header }) => {
  const [open, setOpen] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const addDevice = (device) => {
    setSelectedDevices([...selectedDevices, device])
  }

  const setSelected = () => {
    dispatch({ type: ADD_VIEWS, payload: { newValues: selectedDevices} })
    setOpen(false)
  }

  const onChangeSearchText = ({ target: { value }}) => {
    setSearchText(value);
    const newData = data.filter(device => device.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredData(newData)
  }

  return (
    <div className='views-modal'>
      <div className="view-btn" onClick={() => setOpen(true)}> <PlusIcon /> {header}</div>
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
        <h2 className='modal-header'>Select {header}</h2>
        <input className='input' type="text" placeholder='Search' onChange={onChangeSearchText} value={searchText} />
        <div className="views-list">
          {filteredData.map(device => (
            <div className="device" onClick={() => addDevice(device)}>{device.name}</div>
          ))}
        </div>
        {selectedDevices && (
          <div className="selected-device">
            {selectedDevices.map(device => (
              <div className="device">{device.name}</div>
            ))}
          </div>
        )}
        <div className='footer'>
          <button className='btn' onClick={setSelected}>Select</button>
        </div>
      </Modal>
    </div>
  )
}

export default MobileViewModal
