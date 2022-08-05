import { Routes, Route } from "react-router-dom";

import routes from "./routes";

const Router = (PrivateRoute, auth) => {
  const routeMap = routes.map(
    ({
      Private,
      exact = true,
      Layout = {},
      modules,
      Component,
      path,
    }) => {
      const ComponentWithLayout = () => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      };

      return Private
        ? [
            <PrivateRoute
              key={path}
              exact={exact}
              element={ComponentWithLayout}
              path={path}
              auth={auth}
            />,
            modules &&
              modules.map((childrenProps) => (
                <PrivateRoute
                  key={childrenProps.path}
                  exact={childrenProps.exact}
                  element={() => (
                    <Layout>
                      <childrenProps.Component />
                    </Layout>
                  )}
                  path={path + childrenProps.path}
                  auth={auth}
                />
              )),
          ]
        : [
            <Route
              key={path}
              exact={exact}
              element={ComponentWithLayout}
              path={path}
            />,
            modules &&
              modules.map((childrenProps) => (
                <Route
                  key={childrenProps.path}
                  exact={childrenProps.exact}
                  element={() => (
                    <Layout>
                      <childrenProps.Component />
                    </Layout>
                  )}
                  path={path + childrenProps.path}
                />
              )),
          ];
    }
  );
  return <Routes>{routeMap}</Routes>;
};

export default Router;
