import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home-page/Home.jsx";
import SignIn from "./pages/Sign-in-page/SignIn";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
