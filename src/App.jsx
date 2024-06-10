import { useEffect, useState} from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Moreinfo from "./Moreinfo";

function App() {
  const [data, setData] = useState([]);
  const baseUrl = "https://fakestoreapi.com";
  useEffect(() => {
    fetch(baseUrl + "/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

// / / /  rotingayinov chexav  // // // / / / /     / / / /   / / / / /     / /   / / /  

  const moreInfo = (prod) => {
    let id = prod.toString();
    //  console.log(id);

    fetch(baseUrl + "/products/" + id)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="appdiv">
      {data.map((prod) => {
        return (
          <div className="flip-card" key={prod.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{prod.title}</h2>
              </div>
              <div className="flip-card-back">
                <h3>{prod.price}$</h3>
             <button className="btn" onClick={() => moreInfo(prod.id)}>more info</button>
              </div>
            </div>
          </div>
        );
      })}
  
    </div>


  );
}

export default App;
