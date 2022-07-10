import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  return (
    <Route
      render={({ location }) =>
        // eslint-disable-next-line react/prop-types
        props.auth ? (
          <props.element />
        ) : (
          <Redirect to={{ pathname: "/auth/login", state: { from: location } }} />
        )
      }
    />
  );
};
export default PrivateRoute;
