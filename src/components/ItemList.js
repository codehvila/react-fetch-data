import { useEffect, useState } from "react";
import styles from "./ItemList.module.css";

export default function ItemList() {
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    fetch("http://localhost:3005/items")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul className={styles.ItemList}>
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
    </div>
  );
}
