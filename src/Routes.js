import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ScrollToTop from 'Components/ScrollToTop';
import Main from 'Pages/Main/Main';
import MainHire from 'Pages/Main/MainHire';
import Login from 'Pages/Login/Login';
import SignUp from 'Pages/SignUp/SignUp';
import Pro from 'Pages/Pro/Pro';
import ProProfileManagement from 'Pages/ProProfileManagement/ProProfileManagement';
import ProDetail from 'Pages/Pro/ProDetail';
import ProProfile from 'Pages/Pro/ProProfile';
import Local from './Components/Local/Local';
import Footer from 'Components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path='/main/:slug' component={Main} />
            <Route exact path='/hire' component={MainHire} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/pro' component={Pro} />
            <Route
              exact
              path='/pro-management'
              component={ProProfileManagement}
            />
            <Route exact path='/prodetail' component={ProDetail} />
            <Route exact path='/proprofile' component={ProProfile} />
            <Route exact path='/local' component={Local} />
            <Route exact path='/footer' component={Footer} />
            <Redirect from='*' to='/main/레슨' />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Routes;
