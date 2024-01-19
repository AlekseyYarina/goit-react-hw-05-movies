import React from 'react';

export const ErrorMessage = ({ error }) => {
  return (
    <div>
      <div>
        <p>Oops...</p>
        <p>{error}</p>
      </div>
    </div>
  );
};
