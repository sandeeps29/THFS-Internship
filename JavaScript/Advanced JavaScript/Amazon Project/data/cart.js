export const cart = [];

export function addToCart(productId){
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
}