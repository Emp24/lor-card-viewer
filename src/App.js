import "./App.css";
import React, { Component } from "react";
import Cards from "./components/cards";
class App extends Component {
  state = {};

  async componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    );
  }
}

export default App;
