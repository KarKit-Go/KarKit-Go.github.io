import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
//
import Loader from "react-loaders";

// import components made by myself
import Header from "./components/Header";
import Design from "./components/Design";
import Tool from "./components/Tool";
import Book from "./components/Book";
import Team from "./components/Team";

// import style
import "./styles/App.scss";

const Homepage = lazy(() => import("./components/Homepage"));

export const Spinner = () => {
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
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/design" element={<Design />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/book" element={<Book />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
