import { ButtonToBack } from 'components/ButtonToBack/ButtonToBack';
import { Cast } from 'components/Cast/Cast';
import { Reviewes } from 'components/Reviewes/Reviewes';
import React from 'react';

export const MoviesDetailsPage = () => {
  return (
    <div>
      <ButtonToBack />
      <h3>MoviesDatails</h3>
      <Cast />
      <Reviewes />
    </div>
  );
};
export default MoviesDetailsPage;
