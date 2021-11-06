import Logo from '../logo/logo';
import type { Film, State } from '../../types/types';
import UserBlock from '../user-block/user-block';
import FilmCardsList from '../catalog-films-list/catalog-films-list';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import PageTitle from '../title/title';
import PageHeader from '../header/header';
import { getFavoriteFilms } from '../../utils/common';
import { connect, ConnectedProps } from 'react-redux';
import { isFetchError, isFetchNotReady } from '../../utils/fetched-data';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading/loading';

const mapStateToProps = ({films}: State) => ({
  fetchedFilms: films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListScreen({fetchedFilms}: PropsFromRedux): JSX.Element {

  // Здесь юудет загрузка избранных фильмов

  if (isFetchNotReady(fetchedFilms)) {
    return <LoadingScreen />;
  }

  if (isFetchError(fetchedFilms)) {
    return <NotFoundScreen />;
  }
  const films = fetchedFilms.data as Film[];
  const favoriteFilms = getFavoriteFilms(films);

  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <Logo />
        <PageTitle className="user-page__title">My list</PageTitle>
        <UserBlock />
      </PageHeader>

      <Catalog hiddenTitle="Catalog">

        <FilmCardsList films={favoriteFilms} />
      </Catalog>

      <PageFooter />
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);
