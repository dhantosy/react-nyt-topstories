import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faTh } from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';
library.add(faThList, faTh);

class Navigation extends Component {
  state = {
    mode: '',
    layout: ''
  }

  getInitialState = () => {
    let mode = localStorage.getItem('mode');
    let layout = localStorage.getItem('layout');

    return {
        mode: mode,
        layout: layout
    }
  }

  componentDidMount = () => {
    let mode = localStorage.getItem('mode');
    let layout = localStorage.getItem('layout');
    
    if (mode === 'dark') {
      this.toggleDarkTheme()
    } else {
      this.toggleLightTheme()
    }

    if (layout === 'list') {
      this.toggleLayoutList()
    } else {
      this.toggleLayoutCard()
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
    localStorage.setItem( 'layout', 'list' );
    this.props.layoutChange('list'); 
  }

  toggleLayoutCard = () => {
    localStorage.setItem( 'layout', 'card' );
    this.props.layoutChange('card'); 
  }

  handleChange = (aEvent) => {
    this.props.catChange(aEvent.target.value);
    this.props.history.push(`/${aEvent.target.value}`);
  }

  render() {

    return (
      <div className='container'>
        <section>
          <div className='nav__theme'>
            <p>
              <span>Select Theme:</span>
              <button 
                type='button' 
                className='btn btn-dark btn-sm' 
                onClick={this.toggleDarkTheme}>Dark</button>
              <button 
                type='button' 
                className='btn btn-light btn-sm' 
                onClick={this.toggleLightTheme}>Light</button>
            </p>
          </div>
          <div className='nav__layout'>
            <button 
              type='button' 
              className='btn'
              onClick={this.toggleLayoutList}>
              <FontAwesomeIcon icon='th-list' />
            </button>
            <button 
              type='button' 
              className='btn'
              onClick={this.toggleLayoutCard}>
              <FontAwesomeIcon icon='th' />
            </button>
          </div>
        </section>
        <section>
          <div className='nav__category'>
            <span>Select Category:</span>
            <select 
              className='custom-select'
              onChange={this.handleChange} 
              value={this.state.value}>
              <option value='home'>Home</option>
              <option value='arts'>Arts</option>
              <option value='fashion'>Fashion</option>
              <option value='food'>Food</option>
              <option value='travel'>Travel</option>
              <option value='science'>Science</option>
              <option value='sports'>Sports</option>
            </select>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Navigation);