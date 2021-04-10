import './body.css'
import HomePage from '../section/homepage';
import Contact from '../section/contact';
import AboutUs from '../section/aboutus';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Body(){
    return (
        <div className="body" > 
        <Router>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About US</Link>
            </div>
            <div className="content">
            <Switch>
                <Route exact path="/"><HomePage /></Route>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/about"><AboutUs /></Route>
            </Switch>
            </div>
        </Router>
        </div>
    );
}

export default Body;