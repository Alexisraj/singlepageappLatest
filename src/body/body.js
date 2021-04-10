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
  
function LeftMenu(){
    return (
        <div className="body" > 
        <Router>
            <div className="menu">
                <Link className="each" to="/">Home</Link>
                <br />
                <Link className="each"  to="/contact">Contact</Link>
                <br />
                <Link className="each"  to="/about">About US</Link>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/"><HomePage /></Route>
                    <Route  exact path="/contact"><Contact /></Route>
                    <Route  exact path="/about"><AboutUs /></Route>
                </Switch>
            </div>
        </Router>
        </div>
    );
}

export default LeftMenu;