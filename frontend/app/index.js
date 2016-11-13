import React, { Component } from "react";
import ReactDOM from "react-dom";

class AppContainer extends Component{

  render(){
    return (<h1>Simpleton Main Page</h1>)
  }
}

ReactDOM.render(<AppContainer/>, document.getElementById("app"));