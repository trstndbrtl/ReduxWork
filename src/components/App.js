import React, { Component } from 'react';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import HocAnthentification from '../helpers/HocAnthentification';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import User from './User/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={HocAnthentification(Contact)}/>
        <Route path="/user" component={User}/>
      </div>
    );
  }
}

export default App;
