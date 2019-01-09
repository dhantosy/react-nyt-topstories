import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faTh } from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';
library.add(faThList, faTh);

class Navigation extends Component {
  state = {
    mode: ''
  }

  getInitialState = () => {
    let mode = localStorage.getItem('mode');

    return {
        mode: mode
    }
  }

  componentDidMount = () => {
    let mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      document.body.classList.add('mode__dark')
    } else {
      document.body.classList.remove('mode__dark')
    }

  }

  toggleDarkTheme = () => {
    document.body.classList.add('mode__dark')
    localStorage.setItem( 'mode', 'dark' );
    this.setState({ mode: 'dark' });
  }

  toggleLightTheme = () => {
    document.body.classList.remove('mode__dark');
    localStorage.setItem( 'mode', 'light' );
    this.setState({ mode: 'light' });
  }

  toggleLayoutList = () => {
    this.props.layoutChange('list'); 
  }

  toggleLayoutCard = () => {
    this.props.layoutChange('card'); 
  }

  render() {
    
    return (
      <div className="container">
        <section>
          <div className='nav__theme'>
            <p>
              <span>Select Theme:</span>
              <button 
                type="button" 
                className="btn btn-dark btn-sm" 
                onClick={this.toggleDarkTheme}>Dark</button>
              <button 
                type="button" 
                className="btn btn-light btn-sm" 
                onClick={this.toggleLightTheme}>Light</button>
            </p>
          </div>
          <div className='nav__layout'>
            <button 
              type="button" 
              className="btn"
              onClick={this.toggleLayoutList}>
              <FontAwesomeIcon icon="th-list" />
            </button>
            <button 
              type="button" 
              className="btn"
              onClick={this.toggleLayoutCard}>
              <FontAwesomeIcon icon="th" />
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Navigation;