import React from 'react';

// import components
import NavBar from "./Navbar";

export default class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }L
}