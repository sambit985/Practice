import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
         <NavbarBrand href='/'>Restorante confusion </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
    );
  }
}

export default App;
