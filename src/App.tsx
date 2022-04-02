import React from 'react';
import './App.css';
import {InfoBoard} from "./components/InfoBoard";

function App() {

  return (
    <div className="wrapper">
    {/*Hello! Im a your helper! can i help?*/}
      <InfoBoard/>
        <InfoBoard/>
        <InfoBoard/>
      <InfoBoard/>
        <InfoBoard/>
    </div>
  );
}

export default App;
