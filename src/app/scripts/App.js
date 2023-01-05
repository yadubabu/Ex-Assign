import React from "react";
import ReactDOM from "react-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";

class App extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
