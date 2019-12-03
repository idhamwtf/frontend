import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import Header  from './components/header'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Homepage/>
      </div>
     );
  }
}
 
export default App;