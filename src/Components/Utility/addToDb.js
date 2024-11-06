// for add to cart
const getStoredGadgetAtAddToCart = () => {
  const storedListStr = localStorage.getItem("add-to-cart");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

// for add to cart
const addGadgetToCart = (id) => {
  const storedList = getStoredGadgetAtAddToCart();
  if (storedList.includes(id)) {
    console.log(id, "already exist for add to cart");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("add-to-cart", storedListStr);
  }
};

// for wishlist
const getStoredGadgetToWishlist = () => {
  const storedListStr = localStorage.getItem("wishlist");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

// for wishlist
const addGadgetToWishlist = (id) => {
  const storedList = getStoredGadgetToWishlist();
  if (storedList.includes(id)) {
    console.log(id, "already exist for wishlist ");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wishlist", storedListStr);
  }
};

export { addGadgetToCart, addGadgetToWishlist, getStoredGadgetAtAddToCart, getStoredGadgetToWishlist };
