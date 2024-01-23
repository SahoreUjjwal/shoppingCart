import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from '../context';
function ItemCard(props) {
  const {handleAdd,handleRemove} = useValue();
  const {item} = props;

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.itemPrice}>&#x20B9; {item.price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(item)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
