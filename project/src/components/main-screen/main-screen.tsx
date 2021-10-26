import PageFooter from '../page-footer/page-footer';
import PromoFilmCard from '../promo-film-card/promo-film-card';
import type { Film } from '../../types/types';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';
import { getGenresList, ALL_GENRES } from '../../utils/genres';
import { useState } from 'react';

type MainScreenProps = {
  promoFilm: Film,
  films: Film[],
}

function MainScreen({promoFilm, films}: MainScreenProps): JSX.Element {
  const [ activeGenre, setActiveGenre ] = useState(ALL_GENRES);
  const genres = getGenresList(films);
  return (
    <>
      <PromoFilmCard film={promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenresList genres={genres} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
          <CatalogFilmsList films={films} />
          <CatalogMoreButton />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MainScreen;
