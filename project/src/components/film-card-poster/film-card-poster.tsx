import {FilmCardBackgroundSize} from '../../constants';

type FilmCardBackgroundProps = {
  src: string,
  alt: string,
  size?: string,
}

const BASE_CLASS_NAME = 'film-card__poster';

function FilmCardPoster({src, alt, size}: FilmCardBackgroundProps): JSX.Element {
  let sizedClassName = '';

  if (size === FilmCardBackgroundSize.Small) {
    sizedClassName = `${BASE_CLASS_NAME}--small`;
  }

  if (size === FilmCardBackgroundSize.Big) {
    sizedClassName = `${BASE_CLASS_NAME}--big`;
  }

  const fullClassName = `${BASE_CLASS_NAME} ${sizedClassName}`;

  return (
    <div className={fullClassName}>
      <img src={src} alt={alt} width="218" height="327" />
    </div>
  );
}

export default FilmCardPoster;
