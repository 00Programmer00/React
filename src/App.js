import React from 'react'
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Users from './components/Users';
import Map from "./components/Map";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



const ParamsExample = () => (
    <Router>
        <div>
            <nav className="navbar navbar-inverse text-center" >
                <div className="container text-center">
                    <ul className="nav navbar-nav" id="navigation">
                        <li><Link to ="/posts">Posts</Link></li>
                        <li><Link to ="/gallery">Gallery</Link></li>
                        <li><Link to ="/users">Users</Link></li>
                    </ul>
                </div>
            </nav>
            <Route path="/posts" component={Blog}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/users" component={Map}/>
            <Route path="/users" component={Users}/>


        </div>
    </Router>
);

export default ParamsExample

