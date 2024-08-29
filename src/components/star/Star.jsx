import './styles.css';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ numStars }) => {
  const [rating, setRating] = useState(0);
  const [mouseMove, setMouseMove] = useState(0);

  let handleRating = index => {
    setRating(index);
  };

  let handleMouseEnter = index => {
    setMouseMove(index);
  };

  let handleMouseLeave = () => {
    setMouseMove(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, idx) => {
        const starIndex = idx + 1;

        return (
          <FaStar
            key={starIndex}
            className={starIndex <= (mouseMove || rating) ? 'active' : 'inactive'}
            onClick={() => handleRating(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Star;

