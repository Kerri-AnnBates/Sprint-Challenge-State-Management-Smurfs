import React, { Component } from "react";

import SmurfsList from "./SmurfsList";

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header>
        <h1>Hello Smurfs</h1>
        </header>
        <SmurfsList />
      </div>
    );
  }
}

export default App;
