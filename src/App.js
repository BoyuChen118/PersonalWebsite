import React, { Component } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Carousel from './components/carousel';
import Main from './components/main';
import Features from './components/features';
import './App.css';
import Footer from './components/footer';

class App extends Component {
  render(){
  return (
    <div>
    <Header></Header>
    <Banner></Banner>
    <Carousel></Carousel>
    <Main></Main>
    <Features></Features>
    <Footer></Footer>
    </div>

  );
  }
}

export default App;
