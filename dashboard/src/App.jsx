import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./assets/Component/NavBar";
import Card from "./assets/Component/Card";
import Header from "./assets/Component/Header";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="left-side">
        <Header name="AstroDash" />
        <NavBar />
      </div>
    </div>
  );
}

export default App;
