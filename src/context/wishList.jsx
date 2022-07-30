import { createContext, useState } from "react";

export let wishListContext = createContext(0);






export function WishListContext(props) 
{

    let [wishList , setWishlist] = useState(0)
    let [addToCart, setaddToCart] = useState(0)

    function increaseWish ()
    {
        setWishlist(wishList++)
    }

    function decreaseWish() 
    {
        if(wishList>0){
            setWishlist(wishList--)
        }
    }

    function increaseCart ()
    {
        setaddToCart(addToCart++)
    }

    function decreaseCart() 
    {
        if(addToCart>0){
            setaddToCart(wishList--)
        }
    }



    return <wishListContext.Provider value={{wishList , addToCart , increaseWish , decreaseWish , increaseCart , decreaseCart}}>{props.children}</wishListContext.Provider>
}