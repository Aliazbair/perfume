import React from 'react';

export const Text = ({ title, className }) => {
  return (
    <h2 className={` text-xl md:text-4xl font-bold text-center ${className} `}>
      {title}
    </h2>
  );
};
