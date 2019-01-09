import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
