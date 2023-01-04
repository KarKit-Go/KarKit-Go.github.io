import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
//
import Loader from "react-loaders";

// import components made by myself
import Header from "./components/Header";

// import style
import "./styles/App.scss";

const Homepage = lazy(() => import("./components/Homepage"));

const Spinner = () => {
  return (
    <div className="loc">
      <Loader type="pacman" active />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Homepage />
      </Suspense>
    </Router>
  );
}

export default App;
