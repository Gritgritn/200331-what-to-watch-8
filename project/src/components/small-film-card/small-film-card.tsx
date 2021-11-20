import { Link } from 'react-router-dom';
import type { Film } from '../../types/types';
import { AppRoute } from '../../constants';
import { useEffect, useState, useRef, memo } from 'react';
import SmallFilmCardVideo from '../small-film-card-video/small-film-card-video';
import classNames from 'classnames';
import SmallFilmCardPreview from '../small-film-card-preview/small-film-card-preview';

const BASE_CLASS_NAME = 'small-film-card';

const HOVER_DELAY = 1000;

type SmallFilmCardProps = {
  film: Film,
  className?: string;
}

function SmallFilmCard({film, className}: SmallFilmCardProps): JSX.Element {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [ isHovered, setHovered ] = useState(false);
  const [ isDelayedHovered, setDelayedHovered ] = useState(false);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    clearTimer();


    timer.current = setTimeout(() => {
      if (!isHovered && isDelayedHovered) {
        setDelayedHovered(false);

        return;
      }

      setDelayedHovered(true);
    }, HOVER_DELAY);

    return clearTimer;
  }, [isDelayedHovered, isHovered]);

  return (
    <article className={classNames(BASE_CLASS_NAME, className)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} data-testid="small-film-card">
      <Link to={AppRoute.Film(film.id)} style={{ color: 'inherit'}}>
        { isHovered ?
          (<SmallFilmCardVideo src={film.previewVideoLink} poster={film.previewImage} />)
          :
          (<SmallFilmCardPreview src={film.previewImage} alt={film.name} />)}
        <h3 className="small-film-card__title" data-testid="small-card-title">
          <span className="small-film-card__link">{film.name}</span>
        </h3>
      </Link>
    </article>
  );
}
export default memo(SmallFilmCard);
