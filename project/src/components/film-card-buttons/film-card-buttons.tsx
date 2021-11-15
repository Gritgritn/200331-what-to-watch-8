import type { Film } from '../../types/types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { getAuhorizationStatus } from '../../store/authorization/authorization-selectors';

type FilmCardButtonsProps = {
  isFilmFavorite: boolean,
  withAddReview?: boolean,
  film: Film
}

function FilmCardButtons({film, isFilmFavorite, withAddReview}: FilmCardButtonsProps): JSX.Element {
  const authorizationStatus = useSelector(getAuhorizationStatus);

  const handleFavoriteButtonClick = () => {
    // Обработка добавления в избранное
  };

  return (
    <div className="film-card__buttons">
      <Link to={AppRoute.Player(film.id)} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {
        authorizationStatus  === AuthorizationStatus.Auth && (
          <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteButtonClick}>
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref={isFilmFavorite ? '#in-list' : '#add'}></use>
            </svg>
            <span>My list</span>
          </button>
        )
      }
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
