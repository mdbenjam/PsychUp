import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import AppFrame from "./components/AppFrame";
import Experiment from "./components/Experiment";
import ControlFlow from "./components/ControlFlow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AppFrame sideBar={<ControlFlow />} mainContent={<Experiment />} />
    </div>
  );
}

export default App;
