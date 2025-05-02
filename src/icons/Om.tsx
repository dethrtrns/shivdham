import React from 'react';
import OmSvg from '../../public/images/Om.svg';

export const Om: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <span className={className}>
      <OmSvg />
    </span>
  );
};