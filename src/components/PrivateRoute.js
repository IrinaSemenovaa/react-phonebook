import { selectIsUserRefreshing, selectIsLoggedIn } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isUserRefreshing = useSelector(selectIsUserRefreshing);

  const shouldRedirect = !isLoggedIn && !isUserRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
