import { createContext,useContext,useState } from "react";
import CartModal from "./components/CartModal";

export const cartContext = createContext();
export function useValue(){
    const {total,item,handleRemove,handleAdd,reset,toggleCart,setCartItems,cartItems} = useContext(cartContext);
    return {total,item,handleRemove,handleAdd,reset,toggleCart,setCartItems,cartItems};
}

export default function CustomCartContext ({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);

    const handleAdd = (item) => {
        const index = cartItems.findIndex((itm)=>item.id===itm.id);
        if(index == -1)
        {
            setCartItems([{id:item.id,name:item.name,price:item.price,qty:1},...cartItems]);
            setTotal(total+item.price); 
            console.log(cartItems);
        }
        else{
            cartItems[index].qty = cartItems[index].qty+ 1;
            setCartItems(cartItems);
            setTotal(total+item.price);
        }
      };

      const handleRemove = (id) => {
        
        const itemIndex = cartItems.findIndex((itm)=>itm.id === id);
                    console.log("index",itemIndex);
                        cartItems[itemIndex].qty = cartItems[itemIndex].qty-1;                  
                        setTotal(total-cartItems[itemIndex].price);  
                        if(cartItems[itemIndex].qty==0)
                        {
                            cartItems.splice(itemIndex,1);
                        }
                        setCartItems(cartItems);
                        
            };

      const reset = ()=>{
        setCartItems([]);
        setItem(0);
        setTotal(0);
      }
      const toggleCart=()=>{
            setShowCart((prevState)=>{return !prevState});
      }
    return(
        <cartContext.Provider value={{total,item,handleAdd,handleRemove,reset,toggleCart,cartItems,setCartItems}}>
            {showCart&&<CartModal/>}
            {children}
        </cartContext.Provider>
    )    
}
