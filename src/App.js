import React, { useState } from "react";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import "./App.css";

function App() {
  const [staysCount, setStaysCount] = useState(0);
  // const stays = JSON.parse(localStorage.getItem('stays'));

  const staysCounter = (counter) => {
    console.log("test", counter);
    setStaysCount(counter);
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-3 text-start">
              <h5> Stays in Finland </h5>
            </div>
          </div>
          <div className="col">
            <div className="p-3 text-end">
              <small>
                <i> {staysCount} stays </i>
              </small>
            </div>
          </div>
        </div>
        <Cards counter={staysCounter} />
      </div>
    </div>
  );
}

export default App;
