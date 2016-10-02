import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Components from '../components';

export default function route() {
  return (
    <Router history={ browserHistory }>
      <Route>
        <Route component={ Components.Layouts.ApplicationLayout }>
          <Route component={ Components.Layouts.Step1 } path='/' />
          <Route component={ Components.Layouts.Step2 } path='/step-2' />
          <Route component={ Components.Layouts.Step3 } path='/step-3' />
        </Route>
      </Route>
    </Router>
  );
}
