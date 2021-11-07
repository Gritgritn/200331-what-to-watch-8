import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FilmCardTab } from '../../constants';
import upperFirst from 'lodash/upperFirst';

const BASE_CLASSNAME = 'film-nav';
const BASE_TAB_CLASSNAME = 'film-nav__item';

type FilmCardTabsProps = {
  className?: string;
}

function FilmCardTabs({className}: FilmCardTabsProps): JSX.Element {
  const location = useLocation();
  const fullClassname = classNames(BASE_CLASSNAME, className);

  return (
    <nav className={fullClassname}>
      <ul className="film-nav__list">
        {
          Object.values(FilmCardTab).map((tab) => {
            const fullItemClassname = classNames(BASE_TAB_CLASSNAME, { [`${BASE_TAB_CLASSNAME}--active`]: location.hash.slice(1) === tab });
            const path = `${location.pathname}#${tab}`;

            return (
              <li key={tab} className={fullItemClassname}>
                <Link to={path} className="film-nav__link">{upperFirst(tab)}</Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default FilmCardTabs;
