import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './compenents/header'
import Home from './pages/home'
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/manageadmin'

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Switch>
          <Route path={'/'} exact>
            <Home/>
          </Route>
          <Route path={'/manageadmin'} exact>
            <ManageAdmin/>
          </Route>
        </Switch>
      </div>
     );
  }
}
 

export default App;
