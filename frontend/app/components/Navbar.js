import React from 'react';
import { Link } from "react-router";


export default class NavBar extends React.Component {

  render() {

    const { linkStyle } = style;

    return (
      <nav>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/wordLists">WordLists</Link>
        <Link style={linkStyle} to="/create">Create</Link>
      </nav>)
  }
}

const style = {
  linkStyle: {
    marginLeft: 10,
    marginRight: 10
  }
};