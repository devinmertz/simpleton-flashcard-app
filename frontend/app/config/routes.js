import React from "react";
import {Router, IndexRoute,Route, hashHistory} from "react-router";

// import components
import Wrapper from "../components/Wrapper";
import LandingPage from "../components/LandingPage";
import WordListContainer from "../components/WordListsContainer";
import CreateNewContainer from "../components/CreateNewContainer";

export default class Routes extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Wrapper}>
          <IndexRoute component={LandingPage}></IndexRoute>
          <Route path="wordlists" component={WordListContainer}></Route>
          <Route path="create" component={CreateNewContainer}></Route>
        </Route>
      </Router>
    )
  }
}