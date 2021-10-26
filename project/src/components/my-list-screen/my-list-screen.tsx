import Logo from '../logo/logo';
import type { Film } from '../../types/types';
import UserBlock from '../user-block/user-block';
import FilmCardsList from '../catalog-films-list/catalog-films-list';
import PageFooter from '../page-footer/page-footer';

type MyListScreenProps = {
  getFavoriteFilms: () => Film[],
}

function MyListScreen({getFavoriteFilms}: MyListScreenProps): JSX.Element {
  const favoriteFilms = getFavoriteFilms();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardsList films={favoriteFilms} />
      </section>

      <PageFooter />
    </div>
  );
}

export default MyListScreen;
export type {MyListScreenProps};
