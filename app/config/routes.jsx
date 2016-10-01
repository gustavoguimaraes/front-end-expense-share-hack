import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Components from '../components';

export default function route() {
  return (
    <Router history={ browserHistory }>
      <Route>
        <Route component={ Components.Layouts.ApplicationLayout }>
          <Route component={ Components.Layouts.Dashboard } path='/' />
        </Route>
      </Route>
    </Router>
  );
}
