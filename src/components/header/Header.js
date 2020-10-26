import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">AlloMovie</a>
        <div className="navbar navbar-expand">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/films" className="nav-link"> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favoris" className="nav-link"> Favoris</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }

}