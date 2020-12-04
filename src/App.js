import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";

import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter>
  );
}

export default App;
