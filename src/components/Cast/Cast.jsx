import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCast } from 'servises/api';

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

  return (
    <div>
      <ul>
        {cast.map(member => (
          <li key={member.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${
                member.profile_path || '/no_image_available.jpg'
              }`}
              alt={member.name}
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
