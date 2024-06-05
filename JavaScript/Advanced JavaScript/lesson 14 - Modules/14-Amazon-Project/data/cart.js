export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
      quantity: 1,
    },
  ];
}

export function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let similarItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      similarItem = cartItem;
    }
  });
  if (similarItem) {
    similarItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
  saveToLocalStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
      console.log(newCart);
    }
  });
  cart = newCart;
  saveToLocalStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  return cartQuantity;
}


export function updateQuantity(productId, newQuantity){
  let similarItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      similarItem = cartItem;
    }
  });

  if (similarItem)
    {
      similarItem.quantity = newQuantity;
    }

  saveToLocalStorage();
  return similarItem.quantity
}