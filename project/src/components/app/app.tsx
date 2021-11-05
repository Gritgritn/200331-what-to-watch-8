import MainScreen from '../main-screen/main-screen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmScreen from '../film-screen/film-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import type { State, Comment } from '../../types/types';
import { connect, ConnectedProps } from 'react-redux';
import { AppRoute, AuthorizationStatus, CustomRouteType } from '../../constants';
import CustomRoute from '../custom-route/custom-route';

const mapStateToProps = ({films}: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux & {
  comments: Comment[],
}

function App({films, comments}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root()} exact>
          <MainScreen />
        </Route>
        <Route path={AppRoute.Film()} exact>
          <FilmScreen films={films} comments={comments} />
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

export { App };
export default connector(App);
