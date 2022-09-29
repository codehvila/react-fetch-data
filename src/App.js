import { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowItems(false)}>Hide Items List</button>
      {showItems && <ItemList />}
    </div>
  );
}

export default App;
