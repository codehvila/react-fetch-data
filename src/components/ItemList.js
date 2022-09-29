import { useState } from "react";
import useFetch from "../hooks/useFetch";
import styles from "./ItemList.module.css";

export default function ItemList() {
  const [url, setUrl] = useState("http://localhost:3005/items");

  const { data: items, isPending, error } = useFetch(url);

  console.log(items);

  return (
    <div className={styles.ItemList}>
      <h2>Item List</h2>
      {isPending && <div>Loading items...</div>}
      {error && <div>{error}</div>}
      <ul>
        {items &&
          items.map((item) => (
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
