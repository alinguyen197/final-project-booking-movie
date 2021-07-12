import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import LoadingComponent from "./components/Loading/LoadingComponent.jsx";
import Admin from "./pages/Admin-page/Admin.jsx";
import Home from "./pages/Home-page/Home.jsx";
import SignIn from "./pages/Sign-in-page/SignIn";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <LoadingComponent />

        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/admin" exact={true}>
            <Admin />
          </Route>

          <Route path="/sign-in">
            <SignIn />
          </Route>

          {/* Page Not Found */}
          <Route path="">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
