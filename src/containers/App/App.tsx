import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../utils/history';
import { HEADER_ROUTS } from '../../constants';

import Login from '../Login';
import ApplicationSelection from '../ApplicationSelection';
import ApplicationCreation from '../ApplicationCreation';
import Header from '../../components/Header';

import createStore from '../../store';
import './style.scss';

class App extends Component<object, object> {
  render() {
    return (
      <Provider store={createStore({})}>
        <Router history={history}>
          <Route path={HEADER_ROUTS} component={Header} />
          <div className="App">
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/applicationSelection" component={ApplicationSelection}/>
                <Route exact path="/applicationCreation" component={ApplicationCreation}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
