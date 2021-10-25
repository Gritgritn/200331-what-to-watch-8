import { Link, useLocation } from 'react-router-dom';
import { NavigationItem } from '../../const';

const BASE_CLASSNAME = 'film-nav__item';

function FilmNavigation(): JSX.Element {
  const location = useLocation();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          Object.values(NavigationItem).map((navigationItem) => {
            const activeClassname = location.hash.slice(1) === navigationItem ? `${BASE_CLASSNAME}--active` : '';
            const fullClassname = `${BASE_CLASSNAME} ${activeClassname}`;
            const path = `${location.pathname}#${navigationItem}`;
            const caption = `${navigationItem[0].toUpperCase()}${navigationItem.slice(1)}`;

            return (
              <li key={navigationItem} className={fullClassname}>
                <Link to={path} className="film-nav__link">{caption}</Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default FilmNavigation;
