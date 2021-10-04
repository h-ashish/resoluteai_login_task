import React from 'react';
import './styles/styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Members from './components/Members';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/member' component={Members} />
          <Route exact path='/forgotpassword' component={ForgotPassword}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
