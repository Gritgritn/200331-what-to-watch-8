import { Link } from 'react-router-dom';
import type { Film } from '../../types/types';
import { AppRoute } from '../../constants';
import { useEffect, useState, useRef } from 'react';
import SmallFilmCardVideo from '../small-film-card-video/small-film-card-video';
import classNames from 'classnames';
import SmallFilmCardPreview from '../small-film-card-preview/small-film-card-preview';

const BASE_CLASSNAME = 'small-film-card';

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

    if (!isHovered) {
      if (isDelayedHovered) {
        setDelayedHovered(false);
      }

      return;
    }

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
    <article className={classNames(BASE_CLASSNAME, className)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
      <Link to={AppRoute.Film(film.id)} style={{ color: 'inherit'}}>
        { isDelayedHovered ?
          (<SmallFilmCardVideo src={film.previewVideoLink} poster={film.previewImage} />)
          :
          (<SmallFilmCardPreview src={film.previewImage} alt={film.name} />)}
        <h3 className="small-film-card__title">
          <span className="small-film-card__link">{film.name}</span>
        </h3>
      </Link>
    </article>
  );
}
export default SmallFilmCard;
