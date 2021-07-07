import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home-page/Home.jsx";
import SignIn from "./pages/Sign-in-page/SignIn";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Header />
            <Home />
          </Route>

          <Route path="/sign-in">
            <SignIn />
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
