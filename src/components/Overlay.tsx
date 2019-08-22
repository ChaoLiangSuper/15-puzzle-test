import React from 'react';

interface IOverlayProps {
  displayText: string;
}

const Overlay: React.FC<IOverlayProps> = ({ displayText }) => (
  <div className='overlay'>{displayText}</div>
);

export default Overlay;
