import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Fullscreen from './Fullscreen';
import Instructions from './Instructions';

const App = () =>{

  return(
    <Switch>
      <Route path="/" component={Fullscreen} exact/>
      <Route path="/instructions" component={Instructions}/>
    </Switch>
  );
}

export default App;