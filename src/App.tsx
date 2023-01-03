import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

// import components made by myself
import Header from "./components/Header";
import Homepage from "./components/Homepage";

// import style
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Header></Header>
      <Homepage></Homepage>
    </Router>
  );
}

export default App;
