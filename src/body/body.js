import "./body.css";
import HomePage from "../section/homepage";
import Contact from "../section/contact";
import AboutUs from "../section/aboutus";
import Events from "../section/events";
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
          <NavLink exact to="/" activeClassName="activeClass">
            Home
          </NavLink>
          <NavLink to="/contact" activeClassName="activeClass">
            Contact
          </NavLink>
          <NavLink to="/about" activeClassName="activeClass">
            About Us
          </NavLink>
          <NavLink to="/events" activeClassName="activeClass">
            Historical Events
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Body;
