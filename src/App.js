import "../src/assets/css/styles.css";
import Register from "./components/register/Register";
import { Sidebar } from "./components/sidebar/Sidebar";
import Topbar from "./components/topBar/Topbar";
import { firebaseConfig } from "./utils/FirebaseUtil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
//import Home from './pages/home/Home';

firebaseConfig();

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
            {/* <Register /> */}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/sidebar">
            <Topbar />
            <Sidebar />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

