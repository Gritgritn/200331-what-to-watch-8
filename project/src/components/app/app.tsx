import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../main-screen/main-screen';
import type {MainFilmCard} from '../../types/types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmScreen from '../film-screen/film-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListscreen from '../my-list-screen/my-list-screen';
import ReviewScreen from '../review-screen/review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const mainFilmCard: MainFilmCard = {
  title: 'The Grand Budapest Hotel',
  genre:  'Drama',
  year: 2014,
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <MainScreen mainFilmCard={mainFilmCard}/>
        </Route>
        <Route path={AppRoute.Film} exact>
          <FilmScreen />
        </Route>
        <Route path={AppRoute.Player} exact>
          <PlayerScreen />
        </Route>
        <Route path={AppRoute.Login} exact>
          <LoginScreen />
        </Route>
        <PrivateRoute path={AppRoute.MyList} exact authorizationStatus={AuthorizationStatus.NotAuth}>
          <MyListscreen />
        </PrivateRoute>
        <PrivateRoute path={AppRoute.Review} exact authorizationStatus={AuthorizationStatus.NotAuth}>
          <ReviewScreen />
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
