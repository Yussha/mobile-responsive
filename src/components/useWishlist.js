import { useState, useEffect } from "react";
import { data } from "./data";

export default function useWishlist(initialWishlist) {
  const [item, setItem] = useState(initialWishlist);

  const addToWishlist = (product) => {
    const newItem = data.find((item) => item.id === product.id);
    if (newItem && !item.some((item) => item.id === product.id)) {
      setItem((prevWishlist) => [...prevWishlist, newItem]);
    }
  };

  // useEffect(() => {
  //   addToWishlist();
  // }, [item]);

  console.log(item);

  return { item, setItem, addToWishlist };
}
