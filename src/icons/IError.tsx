/* eslint-disable max-len */
import React from 'react';
import { ComponentBaseProps } from 'types/components';

const IError: React.FC<ComponentBaseProps> = (props) => {
  return (
    <svg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='M22 19.5L11 0.5L0 19.5H22ZM10 16.5V14.5H12V16.5H10ZM10 12.5H12V8.5H10V12.5Z' fill='#EB4F45' />
    </svg>
  );
};

export default IError;
