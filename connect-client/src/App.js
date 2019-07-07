import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./comopnent/login";
import Register from "./comopnent/register";

import LandingPage from "./comopnent/landingPage";
import PrivateRoute from "./utils/privateRoute";

/** */
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/";
  }
}
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/landing-page" component={LandingPage} />
        </Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
