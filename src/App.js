import React, {useContext, lazy, Suspense} from "react";
import {Router, Link, Redirect} from "@reach/router";


import {GlobalStyles} from "./components/styles/GlobalStyles";
import Logo from "./components/Logo";
import {Home} from "./pages/Home";
import routes from "./shared/routes";
import {Detail} from "./pages/Detail";
import {NavBar} from "./components/NavBar";

// carga a demanda
const Favorites = lazy(() => import('./pages/Favorites'));

import {User} from "./pages/User";
import {NotRegisteredUser} from "./pages/NotRegisteredUser";
import {Context} from "./Context";
import {NotFound} from "./pages/NotFound";
import {LoadingIndicator} from "./components/LoadingIndicator";


export const App = () => {
  const {isAuth} = useContext(Context);

  return (
    <Suspense fallback={<LoadingIndicator/>}>
      <GlobalStyles/>
      <Link to={routes.home}><Logo/></Link>
      <Router>
        <NotFound default/>
        <Home path={routes.home}/>
        <Home path={routes.pet_detail}/>
        <Detail path={routes.detail}/>

        {/* para url protegidas */}
        {!isAuth && <NotRegisteredUser path={routes.login}/>}
        {!isAuth && <Redirect from={routes.favorites} to={routes.login}/>}
        {!isAuth && <Redirect from={routes.users} to={routes.login}/>}
        {isAuth && <Redirect from={routes.login} to={routes.home}/>}
        <Favorites path={routes.favorites}/>
        <User path={routes.users}/>
      </Router>
      <NavBar/>
    </Suspense>
  )
};
