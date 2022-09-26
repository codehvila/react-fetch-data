export default function ItemList() {
  fetch("http://localhost:3005/items")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div>
      <h2>Item List</h2>
    </div>
  );
}
