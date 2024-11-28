import "./styles.css";
function display(param) {
  document.getElementById("app").innerHTML += `<br> ${param} `;
}

// Strategy Interface (optional in JavaScript but implied)
class PaymentStrategy {
  pay(amount) {
    throw new Error("Method 'pay' should be implemented");
  }
}

// Concrete Strategies
class CreditCardPayment {
  pay(amount) {
    display(`Paid $${amount} using Credit Card`);
  }
}

class PayPalPayment {
  pay(amount) {
    display(`Paid $${amount} using PayPal.`);
  }
}

class BitcoinPayment {
  pay(amount) {
    display(`Paid $${amount} using Bitcoin.`);
  }
}

// Context
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy; // The chosen payment strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy; // Dynamically change the strategy
  }

  processPayment(amount) {
    this.strategy.pay(amount); // Delegate to the chosen strategy
  }
}

// Usage
const paymentContext = new PaymentContext(new CreditCardPayment());

export function payByCreditCard() {
  paymentContext.setStrategy(new CreditCardPayment());
  paymentContext.processPayment(100);
}
function payByPaypal() {
  paymentContext.setStrategy(new PayPalPayment());
  paymentContext.processPayment(200); // Paid $200 using PayPal.
}
function payByBitcoin() {
  paymentContext.setStrategy(new BitcoinPayment());
  paymentContext.processPayment(300); // Paid $300 using Bitcoin.
}
// Paid $100 using Credit Card.

document
  .getElementById("creditCardBtn")
  ?.addEventListener("click", payByCreditCard);

document.getElementById("payPalBtn")?.addEventListener("click", payByPaypal);

document.getElementById("bitcoinBtn")?.addEventListener("click", payByBitcoin);
