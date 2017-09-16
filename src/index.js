import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRedirect} from 'react-router';
import { createStore, applyMiddleware } from 'redux';

import App from './app';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Clients from './components/clients/clients';
import Contacts from './components/contacts/contacts';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRedirect to="/home" />
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="services" component={Services}/>
        <Route path="clients" component={Clients}/>
        <Route path="contacts" component={Contacts}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container-fluid'));
