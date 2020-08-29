import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import TasksScreen from './screens/TasksScreen'


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <div className='.container'>
        <Route exact path='/' component={TasksScreen}></Route>
        <Route path='/login' component={LoginScreen}></Route>
        <Route path='/signup' component={SignUpScreen}></Route>
      </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
