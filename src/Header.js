import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import Home from './Home';
  import Wallet from './Wallet';
  import Us from './Us';

class Header extends React.Component {
    render() {
      return (
        <>
        <div className="shopping-list ">
        <h1>NFT Gallery of {this.props.name}</h1>          
          <ul>
            <Link to="/">Home</Link>
            <Link to="/wallet">Wallet</Link> 
            <Link to="/us">Us</Link>               
          </ul>        
        </div>
        </>
      );
    }
  }

export default Header;