import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `<div class="cart-item-container js-cart-item-conatiner-${
    matchingProduct.id
  }">
<div class="delivery-date">
  Delivery date: Tuesday, June 21
</div>

<div class="cart-item-details-grid">
  <img class="product-image"
    src="${matchingProduct.image}">

  <div class="cart-item-details">
    <div class="product-name">
      ${matchingProduct.name}
    </div>
    <div class="product-price">
     ${formatCurrency(matchingProduct.priceCents)}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label js-quantity-label-${
          matchingProduct.id
        }">${cartItem.quantity}</span>
      </span>
      <span data-product-id="${matchingProduct.id}" class="update-quantity-link 
      js-update-link link-primary">
        Update
      </span>
      <input type="number" data-product-id="${
        matchingProduct.id
      }"  class="quantity-input js-quantity-input-${
    matchingProduct.id
  } js-quantity-keydown">
      <span data-product-id="${
        matchingProduct.id
      }" class="save-quantity-link js-save-quantity-link link-primary">Save</span>
      <span data-product-id="${
        matchingProduct.id
      }" class="delete-quantity-link js-delete-link link-primary">
        Delete
      </span>
    </div>
  </div>

  <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>
    <div class="delivery-option">
      <input type="radio" checked
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          Tuesday, June 21
        </div>
        <div class="delivery-option-price">
          FREE Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          Wednesday, June 15
        </div>
        <div class="delivery-option-price">
          $4.99 - Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          Monday, June 13
        </div>
        <div class="delivery-option-price">
          $9.99 - Shipping
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    console.log(productId);
    removeFromCart(productId);
    const container = document.querySelector(
      `.js-cart-item-conatiner-${productId}`
    );
    container.remove();
    updateCartQuantity();
  });
});

document.querySelectorAll(".js-update-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    const updateContainer = document.querySelector(
      `.js-cart-item-conatiner-${productId}`
    );

    updateContainer.classList.add("is-editing-quantity");
  });
});

document.querySelectorAll(".js-save-quantity-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    updateContainerQuantity(productId);
  });
});

document.querySelectorAll(`.js-quantity-keydown`).forEach((input) => {
  input.addEventListener("keydown", (event) => {
    const productId = input.dataset.productId;

    if (event.key === "Enter") {
      updateContainerQuantity(productId);
    }
  });
});

function updateCartQuantity() {
  document.querySelector(
    ".js-return-to-home-link"
  ).innerHTML = `${calculateCartQuantity()} items`;
}

function updateContainerQuantity(productId) {
  const saveContainer = document.querySelector(
    `.js-cart-item-conatiner-${productId}`
  );

  const quantityInput = document.querySelector(
    `.js-quantity-input-${productId}`
  );

  const newQuantity = Number(quantityInput.value);

  if (newQuantity < 0 || newQuantity > 1000) {
    return alert(
      "invalid input! : Quantity must be at least 0 and less than 1000"
    );
  }

  saveContainer.classList.remove("is-editing-quantity");

  const cartItemQuantity = updateQuantity(productId, newQuantity);

  document.querySelector(`.js-quantity-label-${productId}`).innerHTML =
    cartItemQuantity;
  updateCartQuantity();
}

updateCartQuantity();
