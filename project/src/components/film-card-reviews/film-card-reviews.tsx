import Review from '../review/review';
import { Comment } from '../../types/types';
import { splitArrayInTwo } from '../../utils/common';

type FilmReviewsProps = {
  comments: Comment[],
}

function FilmCardReviews({comments}: FilmReviewsProps): JSX.Element {
  const reviews = comments.map((comment) => <Review key={comment.id} comment={comment} />);
  const [ leftReviews, rightReviews ] = splitArrayInTwo(reviews);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { leftReviews }
      </div>
      <div className="film-card__reviews-col">
        { rightReviews }
      </div>
    </div>
  );
}

export default FilmCardReviews;
