import { ButtonToBack } from 'components/ButtonToBack/ButtonToBack';
import { Cast } from 'components/Cast/Cast';
import { Reviewes } from 'components/Reviewes/Reviewes';
import React from 'react';

export const MoviesDatails = () => {
  return (
    <div>
      <ButtonToBack />
      MoviesDatails
      <Cast />
      <Reviewes />
    </div>
  );
};
