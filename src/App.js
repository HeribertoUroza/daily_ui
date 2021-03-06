import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// COMPONENT
import NavBar from './component/NavBar';

// CONTAINERS
import LandingPage from './container/LandingPage/LandingPage'
import _001 from './container/001/001';
import _002 from './container/002/002';

function App() {
  return (
    <>
      <HashRouter>
      <div className='app_container'>
        <NavBar />
        
          <Switch>
            <Route path='/' exact component={ LandingPage } />
            <Route path='/002' exact component={_002} />
            <Route path='/001' exact component={ _001 } />
          </Switch>
        
      </div>
      </HashRouter>
    </>
  );
}

export default App;
