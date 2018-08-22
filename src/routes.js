import React from 'react';

import { Switch, Route } from 'react-router-dom';

//  IMPORT COMPONENTS
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import ClassLast from '../src/components/ClassList/ClassList';
import Student from '../src/components/Student/Student';

//  SET-UP ROUTES FOR COMPONENTS    ( exact ) --> EXACT PATH MUST BE ENTER TO ACESS THIS PATH
export default (
  <Switch>
    <Route exact path="/" component={ Home }></Route>
    <Route path="/about" component={ About }></Route>
    <Route path="/classlist/:class" component={ ClassLast }></Route>
    <Route path="/student/:id" component={ Student }></Route>
  </Switch>
)