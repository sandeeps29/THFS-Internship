let productsHTML = "";
products.forEach((product) => {
  productsHTML += `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src= ${product.image}>
  </div>

  <div class="product-name limit-text-to-2-lines">
   ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
     ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
   ${(product.priceCents / 100).toFixed(2)}
  </div>

  <div class="product-quantity-container">
    <select class="js-quantity-selector-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart js-added-to-cart-${product.id}">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button data-product-id="${
    product.id
  }" class="add-to-cart-button js-add-to-cart-button button-primary">
    Add to Cart
  </button>
</div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

const addedMessageTimeouts = {};

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const { productId } = button.dataset;
    let similarItem;

    // cart.forEach((item) => {
    //   if (productId === item.productId) {
    //     similarItem = item;
    //   }
    // });
    // if (similarItem) {
    //   similarItem.quantity += 1;
    // } else {
    //   cart.push({
    //     productId: productId,
    //     quantity: 1,
    //   });
    // }

    const querySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );

    let quantity = Number(querySelector.value);

    cart.forEach((item) => {
      if (productId === item.productId) {
        similarItem = item;
      }
    });

    if (similarItem) {
      similarItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity,
      });
    }

    console.log(cart);

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

    const viewAdded = document.querySelector(`.js-added-to-cart-${productId}`);

    viewAdded.classList.add("view-added-to-cart");

    const previousTimeoutId = addedMessageTimeouts[productId];

    console.log(previousTimeoutId);

    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }

    console.log(previousTimeoutId);

    let viewId = setTimeout(() => {
      viewAdded.classList.remove("view-added-to-cart");
    }, 2000);

    addedMessageTimeouts[productId] = viewId;
    console.log(addedMessageTimeouts[productId]);
    console.log(addedMessageTimeouts);
  });
});
