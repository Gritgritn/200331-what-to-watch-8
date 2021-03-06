import { useSelector } from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import { Switch, Route, Redirect } from 'react-router-dom';
import FilmScreen from '../film-screen/film-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, CustomRouteType, AuthorizationStatus} from '../../constants';
import CustomRoute from '../custom-route/custom-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/authorization/authorization-selectors';

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <Switch>
      <Route path={AppRoute.Root()} exact>
        <MainScreen />
      </Route>
      <Route path={AppRoute.Film()} exact>
        <FilmScreen />
      </Route>
      <Route path={AppRoute.Player()} exact>
        <PlayerScreen />
      </Route>
      <CustomRoute path={AppRoute.Login()} exact type={CustomRouteType.Guest}>
        <LoginScreen />
      </CustomRoute>
      <CustomRoute path={AppRoute.MyList()} exact type={CustomRouteType.Private}>
        <MyListScreen />
      </CustomRoute>
      <CustomRoute path={AppRoute.AddReview()} exact type={CustomRouteType.Private}>
        <AddReviewScreen />
      </CustomRoute>
      <Route path={AppRoute.NotFound()} exact>
        <NotFoundScreen />
      </Route>
      <Route>
        <Redirect to={AppRoute.NotFound()} />
      </Route>
    </Switch>
  );
}

export default App;
