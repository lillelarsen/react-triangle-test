import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header bg-dark p-3">
          <a href="/" className="text-uppercase font-weight-bold text-info">Type-of-triangle calculator</a>
      </header>
    );
  }
}

export default Header;
