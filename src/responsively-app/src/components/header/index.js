import React, { memo } from 'react';
import './style.scss';
import Menu from './Menu';
import Input from './Input';
import { GitIcon } from '../icons';

const Header = ({ toggleSidebar, isOpen }) => {

  return (
    <div className='header'>
      <Menu onClick={toggleSidebar} isOpen={isOpen}/>
      <Input />
      <div className='header-right-section'>
        {/* <DownloadSection /> */}
        <a
          href="https://github.com/a-saran/responsively"
          target='_blank'
          rel="noopener noreferrer"
        >
          <GitIcon />
        </a>
      </div>
    </div>
  )
}

export default memo(Header);
