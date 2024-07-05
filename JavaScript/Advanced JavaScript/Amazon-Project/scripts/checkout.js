import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch, loadCart } from "../data/products.js";
import { loadCartFetch } from "../data/cart.js";

//import '../data/cart-class.js';

renderCheckoutHeader();

async function loadPage() {
  try {
    //throw 'error 1'
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error 2'
      loadCart(() => {
        //reject('error 3');
        resolve();
      });
    });
  } catch (error) {
    console.log("unexpected error");
  }
}

async function promiseAll(){
  await Promise.all([
    loadProductsFetch(),
    // new Promise((resolve) => {
    //   loadCart(() => {
    //     resolve();
    //   });
    // }),
    loadCartFetch(),
  ]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
}

promiseAll();

/*
Promise.all([
  loadProductsFetch(),
  // new Promise((resolve) => {
  //   loadCart(() => {
  //     resolve();
  //   });
  // }),
  loadCartFetch(),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
