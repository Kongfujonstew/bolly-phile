import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { testDiv } from './testDiv';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers/index';

import { Member } from './Member';

// import promiseMiddleware from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

const store = createStore(reducers);



export class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
      <Member />
        </Provider>
      </BrowserRouter>
    )
  }
}


      // <BrowserRouter>
      //   <Provider store={store}>
      //     <Switch>
      //       <Route path="/" component={Home} />




      //       <Route path="/test" component={testDiv} />
      //     </Switch>
      //   </Provider>
      // </BrowserRouter>