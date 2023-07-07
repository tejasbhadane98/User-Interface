import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";


const App = () => {
  return (

    <Router>
      <Routes>
        <Route  exact path="/" component={Dashboard} />
      </Routes>
    </Router>


  );
}

export default App;
