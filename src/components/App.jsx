import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
    </div>
  );
}
  
export default App;