import React, {Component} from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Register from './components/Register';
import Start from './components/Start';
import Lock from './components/Lock';
import LockList from './components/LockList';
import Success from './components/Success';
import './style/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div>
              <Navigation />
                <Switch>
                <Route
                    path='/'
                    component={Start}
                    exact
                  />
                  <Route
                    path='/Auth'
                    component={Auth}
                    exact
                  />                
                   <Route
                    path='/Register'
                    component={Register}
                    exact
                  />
                  <Route
                    path='/Start'
                    component={Start}
                  />
                  <Route
                    path='/LockList'
                    component={LockList}
                  />
                  <Route
                    path='/Lock'
                    component={Lock}
                  />
                  <Route
                    path='/Success'
                    component={Success}
                  />
                </Switch>
            </div>
         </BrowserRouter>
        );
    }    

}

export default App;

