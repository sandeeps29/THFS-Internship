export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "1",
    },
    {
      productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
      quantity: 4,
      deliveryOptionId: "2",
    },
  ];
}

export function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingProduct;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });
  if (matchingProduct) {
    matchingProduct.quantity += 1;
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

export function updateQuantity(productId, newQuantity) {
  let matchingProduct;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });

  if (matchingProduct) {
    matchingProduct.quantity = newQuantity;
  }

  saveToLocalStorage();
  return matchingProduct.quantity;
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingProduct;
  console.log(productId);
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });

  matchingProduct.deliveryOptionId = deliveryOptionId;

  saveToLocalStorage();
}
