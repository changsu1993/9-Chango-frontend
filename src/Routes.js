import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from 'Pages/Main/Main';
import Login from 'Pages/Login/Login';
import SignUp from 'Pages/SignUp/SignUp';
import Pro from 'Pages/Pro/Pro';
import ProProfileManagement from 'Pages/ProProfileManagement/ProProfileManagement';
import NameInput from 'Components/NameInput/NameInput';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/pro' component={Pro} />
          <Route exact path='/pro-management' component={ProProfileManagement} />
          <Route exact path='/nameinput' component={NameInput} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
