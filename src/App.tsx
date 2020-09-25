import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './features/Home/Home';
import { Cart } from "./features/cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'><Home />
          <Route path='/cart'><Cart /></Route>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
