import { render } from '@testing-library/react';
import React from 'react';
import { ReactDOM } from 'react';

import './App.css'
import Header from './Header';
import Gallery from './NFTGallery';
import Wallet from './Wallet';
import Us from './Us';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(){
    return(
        <Router>
        <div className="App">
          <Header name='Robin'/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Gallery />
              </Route>
              <Route path="/wallet">
                <Wallet />
              </Route>
              <Route path="/us">
                <Us />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
       
);
}
export default App;