import { useState } from "react";

import './App.css';
import Home from './components/Home';
import Landing from "./components/Landing"

const DATA = {
  user: "Robyn",
  store: [
    { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
    { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
    { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
  ],
  shouldDiscount: false,
  currentPage: "Landing"
}

function App() {
  const [currentPage, setCurrentPage] = useState("Landing");
  const [data, setData] = useState(DATA);
  const [shouldDiscount, setShouldDiscount] = useState(true);

  const hottestItem = () =>
    data.store.find(item => item.hottest);

  const goHome = () =>
    setCurrentPage("Home")

  const goLanding = () => 
    setCurrentPage("Landing")

  const applyDiscount = () =>
    setShouldDiscount(!shouldDiscount)
  

  return (
    <div className="App">
      <button onClick={goLanding}>Landing</button>
      <button onClick={goHome}>Home</button>
      <div>
        <button onClick={applyDiscount}>Discount</button>
      </div>
      {
        currentPage === "Landing" ?
        <Landing user={data.user} hottestItem={hottestItem().item} />
        : <Home store={data.store} shouldDiscount={shouldDiscount} />
      }
    </div>
  );
}

export default App;
