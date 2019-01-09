import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
