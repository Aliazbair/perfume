import React from 'react';

export const Card = ({ title, description, link, children }) => {
  return (
    <div class='card'>
      <img
        src='https://th.bing.com/th/id/OIP.5tcr-EWpCAzvrd4nC4DLEQHaEh?pid=ImgDet&rs=1'
        class='card-img-top'
        alt='Card image'
      />
      <div class='card-body'>
        <h5 class='card-title'>{title}</h5>
        <p class='card-text'>{description}</p>
        {children}
        <a href='#' class='btn text-indigo-700 font-bold hover:opacity-25 transition-all duration-300 ease-linear'>
          {link || 'Go'}
        </a>
      </div>
    </div>
  );
};
