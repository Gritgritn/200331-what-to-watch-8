import type { Film } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FavoriteStatus } from '../../constants';
import { getAuthorizationStatus } from '../../store/authorization/authorization-selectors';
import { postFavoriteFilm } from '../../store/films/films-api-actions';

type FilmCardButtonsProps = {
  isFilmFavorite: boolean,
  withAddReview?: boolean,
  film: Film
}

function FilmCardButtons({film, isFilmFavorite, withAddReview}: FilmCardButtonsProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const onFavoriteButtonClick = () => {
    const newFavoriteStatus = isFilmFavorite ? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite;
    dispatch(postFavoriteFilm(film.id, newFavoriteStatus));
  };

  return (
    <div className="film-card__buttons">
      <Link to={AppRoute.Player(film.id)} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button" onClick={onFavoriteButtonClick}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFilmFavorite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {
        withAddReview && authorizationStatus  === AuthorizationStatus.Auth &&
        <Link to={AppRoute.AddReview(film.id)} className="btn film-card__button" type="button">
          <span>Add review</span>
        </Link>
      }
    </div>
  );
}

export default FilmCardButtons;
