import React, {Link}from 'react';


export default class NavBar extends React.Component {

  render() {

    const { linkStyle } = style;

    return (
      <nav>
        <a style={linkStyle} href="/">Home</a>
        <a style={linkStyle} href="/wordLists">WordLists</a>
        <a style={linkStyle} href="/create">Create</a>
      </nav>)
  }
}

const style = {
  linkStyle: {
    marginLeft: 10,
    marginRight: 10
  }
};