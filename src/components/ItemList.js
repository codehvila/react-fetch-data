import { useEffect, useState } from "react";
import styles from "./ItemList.module.css";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState("http://localhost:3005/items");

  console.log(items);

  const fetchItems = async (urlParam) => {
    const response = await fetch(urlParam);
    const json = await response.json();
    setItems(json);
  };

  useEffect(() => {
    fetchItems(url);
  }, [url, fetchItems]);

  return (
    <div className={styles.ItemList}>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>
              {item.id}. {item.productName}
            </h3>
            <p className={styles.price}>
              <span>{item.price}</span>
            </p>
            <p>{item.productDescription}</p>
          </li>
        ))}
      </ul>
      <div className={styles.filters}>
        <button
          onClick={() =>
            setUrl("http://localhost:3005/items?department=Jewelery")
          }
        >
          Jewelery
        </button>
        <button onClick={() => setUrl("http://localhost:3005/items")}>
          All Departments
        </button>
      </div>
    </div>
  );
}
