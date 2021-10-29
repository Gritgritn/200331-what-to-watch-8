import MainScreen from '../main-screen/main-screen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmScreen from '../film-screen/film-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import type { Film, Comment } from '../../types/types';
import { AppRoute, AuthorizationStatus, CustomRouteType } from '../../constants';
import CustomRoute from '../custom-route/custom-route';

type AppProps = {
  films: Film[],
  comments: Comment[],
}

function App({films, comments}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;
  const getComments = () => comments;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root()} exact>
          <MainScreen films={films} />
        </Route>
        <Route path={AppRoute.Film()} exact>
          <FilmScreen films={films} getComments={getComments} />
        </Route>
        <Route path={AppRoute.Player()} exact>
          <PlayerScreen films={films}/>
        </Route>
        <CustomRoute path={AppRoute.Login()} exact type={CustomRouteType.Guest} authorizationStatus={authorizationStatus}>
          <LoginScreen />
        </CustomRoute>
        <CustomRoute path={AppRoute.MyList()} exact type={CustomRouteType.Private} authorizationStatus={authorizationStatus}>
          <MyListScreen films={films} />
        </CustomRoute>
        <CustomRoute path={AppRoute.AddReview()} exact type={CustomRouteType.Private} authorizationStatus={authorizationStatus}>
          <AddReviewScreen films={films}/>
        </CustomRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
