import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./assets/Component/NavBar";
import Cards from "./assets/Component/Cards";
import Header from "./assets/Component/Header";
import Lists from "./assets/Component/Lists";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
function App() {
  const [count, setCount] = useState(0);
  const [objects, setObjects] = useState([]);
  const [tempObjects, setTempObjects] = useState([]);
  const cardInfo = [
    { title: "Pet Store", description: "IL, America" },
    { title: "14:24:39", description: "Sunny" },
  ];

  // query = `https://api.weatherbit.io/v2.0/current?city=${cities[0]}&key=${ACCESS_KEY}`;

  const discoverPressed = () => {
    let query = `https://api.thedogapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=${true}`;
    callAPI(query);
  };
  const callAPI = async (query) => {
    let json;
    const response = await fetch(query);
    json = await response.json();
    if (json[0] == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      let tempObj = {
        name: json[0].breeds[0].name,
        img: json[0].url,
        lifespan: json[0].breeds[0].life_span,
        weight: json[0].breeds[0].weight.metric,
      };
      setObjects((Obj) => [...Obj, tempObj]);
    }
    console.log(objects);
  };

  useEffect(() => {
    setTempObjects(objects);
  }, [objects]);

  function filterOut(event) {
    const text = event.target.value;
    setTempObjects(objects);
    if (text == "") return;

    const newObj = tempObjects.filter((tempObj) => tempObj.name === text);
    setTempObjects(newObj);
  }

  return (
    <div className="App">
      <div className="left-side">
        <Header name="AstroDash" />
        <NavBar />
      </div>
      <div className="right-side">
        <div className="cards-container">
          <Cards className="cards" cards={cardInfo} />
        </div>

        <div className="list-container">
          <input type="text" onChange={filterOut} />
          <Lists className="lists-container" objects={tempObjects} />
          <button onClick={discoverPressed}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default App;
