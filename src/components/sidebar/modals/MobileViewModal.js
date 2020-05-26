import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { ADD_VIEWS } from '../../../actions/types';
import { PlusIcon } from '../../icons';
import Device from './Device';
import { toast } from 'react-toastify';

const MobileViewModal = ({ data, header }) => {
  const [open, setOpen] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const addDevice = (device) => {
    const isDeviceExisted = selectedDevices.map(d => d.id).indexOf(device.id)
    if(isDeviceExisted === -1) {
      setSelectedDevices([...selectedDevices, device])
    }
  }

  const removeSelected = (device) => {
    const newValues = selectedDevices.filter(d => d.id !== device.id)
    setSelectedDevices(newValues)
  }

  const setSelected = () => {
    if(selectedDevices.length) {
      setOpen(false)
      dispatch({ type: ADD_VIEWS, payload: { newValues: selectedDevices} })
      setSelectedDevices([])
      toast(selectedDevices.length > 1 ? 'Multiple Device Added': 'Device Added')
    } else {
      toast('Please select minimum 1 device')
    }
  }

  const onChangeSearchText = ({ target: { value }}) => {
    setSearchText(value);
    const newData = data.filter(device => device.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredData(newData)
  }

  const renderDevice = (device) => {
    const isSelected = selectedDevices.map(d => d.id).indexOf(device.id)
    return (
      <Device
        key={device.id}
        device={device}
        onSelect={addDevice}
        removeSelected={removeSelected}
        selected={isSelected !== -1}
      />
    )
  }

  return (
    <div className='views-modal'>
      <div className="view-btn" onClick={() => setOpen(true)}> <PlusIcon color='#9a9a9a' width='15px'/> {header}</div>
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
        <div className="modal-body">
          <input 
            className='input'
            type="text"
            placeholder='Search'
            onChange={onChangeSearchText}
            value={searchText}
          />
          <div className="views-list">
            {filteredData.map(renderDevice)}
          </div>
          {selectedDevices && (
            <div className="selected-device">
              {selectedDevices.map(device => (
                <div key={device.id} className="device">{device.name}</div>
              ))}
            </div>
          )}
        </div>
        <div className='modal-footer'>
          <button className='btn close' onClick={() => setOpen(false)}>Close</button>
          <button className='btn' onClick={setSelected}>Select</button>
        </div>
      </Modal>
    </div>
  )
}

export default MobileViewModal
