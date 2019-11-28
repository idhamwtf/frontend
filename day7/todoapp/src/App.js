import React from 'react';
import Header from './components/header'
import Home from './pages/homepage'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {  }
  render() {
    return (
      <div>
      <Header/>
      <Home/>
      </div>
      );
  }
}
 
export default App;
