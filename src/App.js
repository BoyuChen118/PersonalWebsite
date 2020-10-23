import React, { Component } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import './App.css';

class App extends Component {
  render(){
  return (
    <div>
    <Header></Header>
    <Banner></Banner>
    </div>
  );
  }
}

export default App;
