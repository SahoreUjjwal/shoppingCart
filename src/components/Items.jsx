
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((item)=>( <ItemCard item={item} key={item.id}/>))}
     
    </div>
  );
}

export default Items;
