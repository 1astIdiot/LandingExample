/* eslint-disable max-len */
import React from 'react';
import { ComponentBaseProps } from 'types/components';

const IPlus: React.FC<ComponentBaseProps> = (props) => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='M9.5 15V24.5H14.5V15H24V10H14.5V0.5H9.5V10H0V15H9.5Z' fill='currentColor' />
    </svg>
  );
};

export default IPlus;
