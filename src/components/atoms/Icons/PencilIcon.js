import React from 'react';

export const PencilIcon = ({className, ...props}) => {
  let classArray = [
    "pencil",
    "fill-current",
    className
  ];

  let baseClass = classArray.join(' ');
  
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={baseClass} {...props}>
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  );
}

export default PencilIcon;