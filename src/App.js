import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingComponent from "./components/Loading/LoadingComponent.jsx";
import Guard from "./HOC/Guard.jsx";
import Admin from "./pages/Admin-page/Admin.jsx";
import Booking from "./pages/Booking-page/Booking.jsx";
import Home from "./pages/Home-page/Home.jsx";
import MovieDetail from "./pages/Movie-detail-page/MovieDetail.jsx";
import SignIn from "./pages/Sign-in-page/SignIn";
import UserProfile from "./pages/UserProfile-page/UserProfile.jsx";
import SignUp from "./pages/Sign-out-page/SignUp.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LoadingComponent />

        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/movie-detail/:movieCode" exact={true}>
            <MovieDetail />
          </Route>

          <Route path="/booking/:bookingCode" exact={true}>
            <Booking />
          </Route>

          <Route path="/admin" exact={true}>
            <Guard>
              <Admin />
            </Guard>
          </Route>

          <Route path="/user-profile">
            <UserProfile />
          </Route>

          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
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
