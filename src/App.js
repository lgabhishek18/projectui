import React, { Fragment } from "react";

import CardOne from "./Components/Card1";
import PersonID from "./Components/IDCard";
import "./index.css";

function App() {
  return (
    <Fragment>
      <div className='content__wrapper d-grid'>
        <CardOne />
        <PersonID />
      </div>
    </Fragment>
  );
}

export default App;
