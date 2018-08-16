import React from 'react';
import './Home.css'
import { HashRouter, NavLink, Route } from 'react-router-dom'


import Customer from './Customer'
import SaveUser from './SaveUser'
import GetCustomer from '../containers/GetCustomer'
export default class WebsiteContainer extends React.Component{
    
   
    render(){
        return(
            <HashRouter>
            <div>
                <div className="header">
                    <ul>
                        <li><NavLink exact to='/'>Add Customer</NavLink></li>
                        <li><NavLink to='/Customer'>Show Customer</NavLink></li>
                    </ul>
                </div>
                <div className="content">
               
                    <Route exact path="/" component={SaveUser}></Route>
                    <Route path="/Customer" component={GetCustomer}></Route>
                </div>
            </div>
            </HashRouter>

        );
    }
}