import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import UsImg from './UsImg';
import Intro from './Intro';

function App() {
    return (
      <div>
        <Header/>
        <UsImg/>
        <Intro/>
        {/* <Switch>
          <Route exact path='/' component={} />
        </Switch> */}
      </div>
    );
  }
  
  export default App;