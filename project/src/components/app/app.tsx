import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import browserHistory from '../../browser-history';
import MainScreen from '../main-screen/main-screen';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmScreen from '../film-screen/film-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, CustomRouteType, AuthorizationStatus} from '../../constants';
import CustomRoute from '../custom-route/custom-route';
import { getLogin } from '../../store/authorization/authorization-api-actions';
import LoadingScreen from '../loading/loading';
import { getAuhorizationStatus } from '../../store/authorization/authorization-selectors';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const checkAuthorization = () => {
    dispatch(getLogin());
  };
  const authorizationStatus = useSelector(getAuhorizationStatus);
  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Unknown) {
      checkAuthorization();
    }
  }, []);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
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
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
