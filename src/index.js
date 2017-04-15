import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const history = browserHistory;

import Main from './components/Pages/Main';
const routes = (
	<Route path="/" component={App}>
		<Route path="main" component={Main} />
	</Route>
)

ReactDOM.render(
  <Provider>
	  <Router history={history}>
		  {routes}
	  </Router>
  </Provider>,
  document.getElementById('root')
);
