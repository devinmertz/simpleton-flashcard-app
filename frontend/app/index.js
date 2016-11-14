import React, {Component} from "react";
import ReactDOM from "react-dom";

// import components
import NavBar from "../components/Navbar";

class AppContainer extends Component {

  render() {
    return (
    <div>
      <NavBar/>
      <h1>Simpleton Main Page</h1>
    </div>)
  }
}

ReactDOM.render(<AppContainer/>, document.getElementById("app"));