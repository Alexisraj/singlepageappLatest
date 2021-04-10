import "./body.css";
import HomePage from "../section/homepage";
import Contact from "../section/contact";
import AboutUs from "../section/aboutus";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <Router>
        <div className="menu">
          <NavLink to="/" activeStyle={{ fontWeight: "bold" }}>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle={{ fontWeight: "bold" }}>
            Contact
          </NavLink>
          <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
            About Us
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Body;
