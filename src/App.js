import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Sign/Signup";
import Container from "./pages/Container/Container"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css"
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const { user }  = useContext(AuthContext)
  return (
    <Router>
    <Switch>
    <Route exact path="/">
       {user ? <Home />: <Container />} 
    </Route>
    <Route path="/profile/:username">
      <Profile />
    </Route>
    <Route path="/signup">
      {user ? <Redirect to="/" /> : <Signup />} 
    </Route>
    <Route path="/login">
       {user ? <Redirect to="/" /> : <Login />}
    </Route>
     </Switch>
    </Router>
  );
}

export default App;
