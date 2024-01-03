const paymentOptions = document.getElementById("paymentType"),
  expenseName = document.getElementById("expenseName"),
  expenseDate = document.getElementById("expenseDate"),
  expenseAmount1 = document.getElementById("expenseAmount1"),
  expenseAmount2 = document.getElementById("expenseAmount2"),
  expenseTableBody = document.getElementById("expenseTableBody"),
  expensesTotal = document.getElementById("expensesTotal"),
  addTransactionButton = document.getElementById("addTransactionButton");

const paymentChoices = ["Cash", "Card", "Debit Card", "Credit Card", "Check"];
const amountTotal = [];

let totalExpenses = 0;

paymentChoices.map((choice) => {
  paymentOptions.innerHTML += `<option value=${choice}>${choice}</option>`;
});

addTransactionButton.addEventListener("click", function (e) {
  e.preventDefault();
  addTransaction();
});

function addTransaction() {
  const selectedPaymentType = paymentOptions.value;
  const enteredExpenseName = expenseName.value;
  const enteredExpenseDate = expenseDate.value;
  const enteredExpenseAmount = parseFloat(
    `${expenseAmount1.value}.${expenseAmount2.value}`
  );

  if (selectedPaymentType === "" || isNaN(enteredExpenseAmount)) {
    return;
  } else {
    expenseTableBody.innerHTML += `
    <tr>
        <td>${selectedPaymentType}</td>
        <td>${enteredExpenseName}</td>
        <td>${enteredExpenseDate}</td>
        <td>$${enteredExpenseAmount}</td>
    </tr>

    `;

    totalExpenses += enteredExpenseAmount;

    expensesTotal.innerHTML = totalExpenses.toFixed(2);

    paymentOptions.value = "";
    expenseName.value = "";
    expenseDate.value = "";
    expenseAmount1.value = "";
    expenseAmount2.value = "";
  }
}
