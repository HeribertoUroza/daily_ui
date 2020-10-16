import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// COMPONENT
import NavBar from './component/NavBar.js';

// CONTAINERS
import _001 from './container/001/001.js';

function App() {
  return (
    <>
      <HashRouter>
      <div className='app_container'>
        <NavBar />
        
          <Switch>
            <Route path='/001' component={_001} />
          </Switch>
        
      </div>
      </HashRouter>
    </>
  );
}

export default App;
