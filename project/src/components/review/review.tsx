import { Comment } from '../../types/types';
import { formatDateTime, formatHumanizedDate } from '../../utils/date';
import { formatRating } from '../../utils/films';

type ReviewProps = {
  comment: Comment,
}

function Review({comment}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={formatDateTime(comment.date)}>{formatHumanizedDate(comment.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatRating(comment.rating)}</div>
    </div>
  );
}

export default Review;
