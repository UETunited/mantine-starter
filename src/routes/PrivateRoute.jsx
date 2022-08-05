function PrivateRoutes() {
  const match = useRouteMatch('/app');
  let allowedRoutes = [];
 
  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
  } else {
    return <Redirect to="/" />;
  }
 
  return (
   <>
    <MapAllowedRoutes 
      routes={allowedRoutes} 
      basePath="/app" 
      isAddNotFound 
    />
   </>
  );
 }
 
 export default PrivateRoutes;