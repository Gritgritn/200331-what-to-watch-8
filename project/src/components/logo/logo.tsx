import { Link } from 'react-router-dom';
import classNames from 'classnames';

type LogoProps = {
  IsFooter?: boolean,
}

const BASE_CLASS = 'logo__link';

function Logo({ IsFooter }: LogoProps): JSX.Element {
  const fullClassName = classNames(BASE_CLASS, { [`${BASE_CLASS}--light`]: IsFooter });

  return (
    <div className="logo">
      <Link to="/" className={fullClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
