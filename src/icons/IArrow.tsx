/* eslint-disable max-len */
import React from 'react';
import { ComponentBaseProps } from 'types/components';

const IArrow: React.FC<ComponentBaseProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM11.1417 7L10 8.175L13.7085 12L10 15.825L11.1417 17L16 12L11.1417 7Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
};

export default IArrow;
