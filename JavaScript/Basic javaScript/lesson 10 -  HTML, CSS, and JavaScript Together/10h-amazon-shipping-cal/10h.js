function keyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-input");
  const cost = Number(inputElement.value);
  /*const buttonElement = document.querySelector('.js-calculate');*/
  const totalCost = document.querySelector(".js-total-cost");

  if (cost < 40 && cost >= 1) {
    totalCost.innerHTML = `$${cost + 10}`;
  } else if (cost <= 0) {
    document.querySelector(".js-error-message").innerHTML =
      "Error: cost cannot be less than $0";
  } else {
    totalCost.innerHTML = `$${cost}`;
  }
}
