import {
  cart,
  removeFromCart,
  updateQuantity,
  updateDeliveryOption,
} from "../../data/cart.js";
import { getProduct, loadProductsFetch } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import {
  calculateDeliveryDate,
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";

export async function renderOrderSummary() {
  await loadProductsFetch();

  let cartSummaryHTML = " ";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    let deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML += `<div class="cart-item-container js-cart-item-conatiner-${
      matchingProduct.id
    }">
    <div class="delivery-date">
      Delivery date: ${dateString}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
        ${matchingProduct.getPrice()}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label js-quantity-label-${
              matchingProduct.id
            }">${cartItem.quantity}</span>
          </span>
          <span data-product-id="${
            matchingProduct.id
          }" class="update-quantity-link 
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
        ${deliveryOptionsHTML(matchingProduct, cartItem)}
      </div>
    </div>
    </div>`;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = calculateDeliveryDate(deliveryOption);

      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" 
          ${isChecked ? "checked" : ""}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
        `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      renderCheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
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

    updateQuantity(productId, newQuantity);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  }

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    console.log(element);
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      console.log(deliveryOptionId);
      console.log(productId);
      updateDeliveryOption(productId, deliveryOptionId);

      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
