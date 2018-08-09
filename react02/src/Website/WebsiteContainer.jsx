import React from 'react';
import ReactDOM from 'react-dom'

import { HashRouter, NavLink, Route } from 'react-router-dom'


import Home from './Home'
import Friends from './Friends'
import Profile from './Profile';

export default class WebsiteContainer extends React.Component{
    
   
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <div className="header">
                    <ul>
                        <li><NavLink exact to='/'>Home</NavLink></li>
                        <li><NavLink to='/friends'>Friends</NavLink></li>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                    </ul>
                </div>
                <div className="content">
               
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/friends" component={Friends}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </div>
            </div>
            </HashRouter>

        );
    }
}