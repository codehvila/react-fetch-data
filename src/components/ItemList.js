import { useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  console.log(items);

  fetch("http://localhost:3005/items")
    .then((response) => response.json())
    .then((json) => setItems(json));

  return (
    <div>
      <h2>Item List</h2>
    </div>
  );
}
