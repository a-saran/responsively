import React, { useState, memo } from 'react';
import { Modal } from 'react-responsive-modal';
import { DownloadIcon, AppleIcon } from '../icons';

const MobileViewModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='views-modal'>
      <div className="view-btn" onClick={() => setOpen(true)}> <DownloadIcon /></div>
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
        <h2 className='modal-header'>
          Download
        </h2>
        <div className="modal-body">
          <AppleIcon />
        </div>
        <div className='modal-footer'>
          
        </div>
      </Modal>
    </div>
  )
}

export default memo(MobileViewModal)
