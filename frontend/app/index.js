import React, {Component} from "react";
import ReactDOM from "react-dom";
// import components
import NavBar from "./components/Navbar";
import Routes from "./config/routes";

class AppContainer extends Component {

  render() {
    return (
    <div>
      <NavBar/>
      <h1>Simpleton Main Page</h1>
    </div>)
  }
}

ReactDOM.render(<Routes/>, document.getElementById("app"));