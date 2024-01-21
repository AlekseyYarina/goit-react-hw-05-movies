import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileImg, requestMovieCast } from 'servises/api';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castData = await requestMovieCast(id);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    if (id) {
      fetchMovieCast();
    }
  }, [id]);

  if (!id) {
    return <div>No cast information available</div>;
  }

  if (cast.length === 0) {
    return <div>No cast information available</div>;
  }

  return (
    <div>
      <ul className={css.list}>
        {cast.map(member => (
          <li className={css.castStyle} key={member.id}>
            <img
              src={getProfileImg(member.profile_path)}
              alt={member.name}
              width={150}
            />
            <p>{member.name}</p>
            <p>Character: {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
