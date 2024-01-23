import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../context";

function CartModal() {
  const {toggleCart,reset,cartItems,handleRemove} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={reset}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cartItems.map((item)=>{ return <div className = {styles.cartCard} key={item.id}>
            <h1>{item.name}</h1>
            <h3>X {item.qty}</h3>
            <button onClick={()=>{handleRemove(item)}}>remove</button>
        </div>})}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
