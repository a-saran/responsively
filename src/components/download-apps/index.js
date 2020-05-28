import React, { useState, memo } from 'react';
import { Modal } from 'react-responsive-modal';
import { DownloadIcon, AppleIcon, LinuxIcon, WindowsIcon } from '../icons';

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
          <div className="icon_container-1">
            <a href="https://drive.google.com/file/d/1_C6oRYkUs42BC0IKyhZ19oVBrj65tPFR/view" title='download' target='_blank' rel="noopener noreferrer">
              <div className="download-icon">
                <AppleIcon />
                mac os
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1cAsbins_T7aVIqA7HTI19FgKfm9TjewZ/view" title='download' target='_blank' rel="noopener noreferrer">
              <div className="download-icon">
                <WindowsIcon />
                windows-64
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1rgKvWv5g-elf2gqyAPKypO9dVuLFpJmB/view" title='download' target='_blank' rel="noopener noreferrer">
              <div className="download-icon">
                <LinuxIcon />
                linux-64
              </div>
            </a>
          </div>
          <div className="icon_container-1">
            <a href="https://drive.google.com/file/d/1GJrkPZHylqMiDOFJw4FfL6QEO8qRQ81K/view" title='download' target='_blank' rel="noopener noreferrer">
              <div className="download-icon">
                <WindowsIcon />
                windows-32
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1c5Ocgf0tYb4U3L3scuD4M40y0ePewayt/view" title='download' target='_blank' rel="noopener noreferrer">
              <div className="download-icon">
                <LinuxIcon />
                linux-32
              </div>
            </a>
          </div>
        </div>
        <div className='modal-footer'>
          
        </div>
      </Modal>
    </div>
  )
}

export default memo(MobileViewModal)
