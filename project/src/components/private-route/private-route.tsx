import { Redirect, Route } from 'react-router';
import { AuthorizationStatus, AppRoute } from '../../const';
import { RouteProps } from 'react-router';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus],
}

function PrivateRoute({authorizationStatus, ...props}:PrivateRouteProps): JSX.Element {
  return (
    <Route { ...props }>
      { authorizationStatus === AuthorizationStatus.Auth ? props.children : <Redirect to={AppRoute.Login} />}
    </Route>
  );
}

export default PrivateRoute;
