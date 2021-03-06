import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthorizationStatus, CustomRouteType, AppRoute } from '../../constants';
import { getAuthorizationStatus } from '../../store/authorization/authorization-selectors';
import { useSelector } from 'react-redux';
import type { ValuesOf } from '../../types/types';

type CustomRouteProps = RouteProps & {
  type: ValuesOf<typeof CustomRouteType>,
}

function CustomRoute({type, ...props}: CustomRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  switch (type) {
    case CustomRouteType.Private: {
      return (
        <Route { ...props }>
          { authorizationStatus  === AuthorizationStatus.Auth ? props.children : <Redirect to={AppRoute.Login()} />}
        </Route>
      );
    }
    case CustomRouteType.Guest: {
      return (
        <Route { ...props }>
          { authorizationStatus  === AuthorizationStatus.NotAuth ? props.children : <Redirect to={AppRoute.Root()} />}
        </Route>
      );
    }
  }
}

export default CustomRoute;
