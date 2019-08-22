import React from 'react';
import { IOverlayProps } from '../types';

const Overlay: React.FC<IOverlayProps> = ({ displayText }) => (
  <div className='overlay'>{displayText}</div>
);

export default Overlay;
