import React from 'react';

export const TrendingUpIcon = ({ className, ...props }) => {
  let classArray = [
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <svg className={baseClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

export default TrendingUpIcon;
