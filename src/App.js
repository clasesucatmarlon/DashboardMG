import "../src/assets/css/styles.css";
import Register from "./components/register/Register";
import { Sidebar } from "./components/sidebar/Sidebar";
import Topbar from "./components/topBar/Topbar";
import { firebaseConfig } from "./utils/FirebaseUtil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import CustomerList from "./components/clients/CustomerList";
import EditCustomers from "./components/clients/EditCustomers";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

firebaseConfig();

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/sidebar">
            <Topbar />
            <div className="container">
              <Sidebar />
              <CustomerList />
            </div>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/edit">
            <Topbar />
            <div className="container">
              <Sidebar />
              <EditCustomers />
            </div>
          </Route>
          <Route exact path="/home">
            <Topbar />
            <div className="container">
              <Sidebar />
              <Home />
            </div>
          </Route>
          <Route exact path="/userlist">
            <Topbar />
            <div className="container">
              <Sidebar />
              <UserList />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

