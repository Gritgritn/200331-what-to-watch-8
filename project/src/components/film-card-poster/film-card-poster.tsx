import {FilmCardBackgroundSize} from '../../constants';

type FilmCardBackgroundProps = {
  src: string,
  alt: string,
  size?: string,
}

const BASE_CLASSNAME = 'film-card__poster';

function FilmCardBackground({src, alt, size}: FilmCardBackgroundProps): JSX.Element {
  let sizedClassName = '';

  if (size === FilmCardBackgroundSize.Small) {
    sizedClassName = `${BASE_CLASSNAME}--small`;
  }

  if (size === FilmCardBackgroundSize.Big) {
    sizedClassName = `${BASE_CLASSNAME}--big`;
  }

  const fullClassName = `${BASE_CLASSNAME} ${sizedClassName}`;

  return (
    <div className={fullClassName}>
      <img src={src} alt={alt} width="218" height="327" />
    </div>
  );
}

export default FilmCardBackground;
