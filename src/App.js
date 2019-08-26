import React from "react";
import routes from "./routes";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        {routes}
      </div>
    </div>
  );
}

export default App;
