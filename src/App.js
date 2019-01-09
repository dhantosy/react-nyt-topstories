import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

class App extends Component {
  state = {
    layout: ''
  }

  handleLayoutChange = (aLayout) => {
    this.setState({ layout: aLayout });
  }

  handleCatChange = (aValue) => {
    this.setState({ category: aValue });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation
          layoutChange={this.handleLayoutChange}
          catChange={this.handleCatChange} />
        <News 
          layout={this.state.layout} 
          category={this.state.category}/>
        <Footer />
      </div>
    );
  }
}

export default App;
