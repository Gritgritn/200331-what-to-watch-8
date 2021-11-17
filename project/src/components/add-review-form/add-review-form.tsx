import { useState, ChangeEvent, FormEvent, Fragment, useEffect, useMemo } from 'react';
import { postComment } from '../../store/comments/comments-api-actions';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '../../constants';
import { CommentPost } from '../../types/types';
import { useIdParam } from '../../hooks/use-id-param';
import { isNewCommentsLoading } from '../../store/comments/comments-selectors';
import { validateReviewContent, validateReviewRating } from '../../utils/common';

const INITIAL_FORM_DATA: CommentPost = {
  rating: 0,
  comment: '',
} as const;

function AddReviewForm(): JSX.Element {
  const { id: filmId } = useIdParam() as { id: number };
  const [rating, setRating] = useState(INITIAL_FORM_DATA.rating);
  const [comment, setComment] = useState(INITIAL_FORM_DATA.comment);
  const [isFormValid, setFormValidity] = useState(false);

  const isFormLoading = useSelector(isNewCommentsLoading);

  const dispatch = useDispatch();

  const createReview = (formData: CommentPost) => {
    dispatch(postComment(filmId, formData));
  };
  const isRatingValid = useMemo(() => validateReviewRating(rating), [rating]);
  const isReviewContentValid = useMemo(() => validateReviewContent(comment), [comment]);

  useEffect(() => {
    setFormValidity(isRatingValid && isReviewContentValid);
  }, [isRatingValid, isReviewContentValid]);

  const onRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  const onCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData: CommentPost = {
      rating,
      comment,
    };

    createReview(formData);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            { new Array(Rating.MaxValue)
              .fill(null)
              .map((item, index) => index + 1)
              .reverse()
              .map((value) => {
                const inputId = `star-${value}`;
                const IsChecked = value === rating;

                return (
                  <Fragment key={value}>
                    <input
                      id={inputId}
                      className="rating__input"
                      type="radio"
                      name="rating"
                      value={value}
                      checked={IsChecked}
                      disabled={isFormLoading}
                      onChange={onRatingChange}
                    />
                    <label className="rating__label" htmlFor={inputId}>
                      Rating {value}
                    </label>
                  </Fragment>
                );
              }) }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            id="review-text"
            className="add-review__textarea"
            name="review-text"
            placeholder="Review text"
            value={comment}
            disabled={isFormLoading}
            onChange={onCommentChange}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isFormValid || isFormLoading}
            >
                Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
