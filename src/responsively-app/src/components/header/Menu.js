import React, { memo } from 'react';

const Menu = ({ onClick, isOpen }) => {
  return (
    <div className={`hamburger-menu ${!isOpen ? 'open': 'close'}`} onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default memo(Menu);
