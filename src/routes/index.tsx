import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import Works from '../pages/Works'
import Works1 from '../pages/Works1'
import Works2 from '../pages/Works2'
import Works3 from '../pages/Works3'
import { Route } from 'react-router-dom';

function Routes() {
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/works/works1' component={Works1} />
        <Route exact path='/works/works2' component={Works2} />
        <Route exact path='/works/works3' component={Works3} />
      </>
    );
  }
  
  export default Routes;