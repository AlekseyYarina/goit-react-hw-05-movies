import React, { useEffect, useState } from 'react';
import { requestMovieReviews } from 'servises/api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await requestMovieReviews(id);

        if (response.results.length === 0) {
          setReviews([]);
        } else {
          setReviews(response.results);
        }
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    if (id) {
      fetchMovieReviews();
    }
  }, [id]);

  if (!id || reviews.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
