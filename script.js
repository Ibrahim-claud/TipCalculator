//===============================
//===============================
//== Global Variables from DOM ..
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");
const BillErrorText = document.getElementById("BillErrorText");
const TipErrorText = document.getElementById("TipErrorText");
const increasePp = document.getElementById("increasePp");
const decreasePp = document.getElementById("decreasePp");
const splitBtn = document.querySelectorAll(".splitButton");

//=== getting number of people from DOM
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

//=== Bill Calculation Fn ...
const calculateBill = () => {
  const bill = Number(billTotalInput.value);
  const tipPercentage = Number(tipInput.value) / 100;

  //---if condition to validate Bill number input
  if (isNaN(bill)) {
    BillErrorText.innerText = "Please enter a valid number";
    billTotalInput.value = 0;
    return;
  } else {
    BillErrorText.innerText = "";
  }

  //---if condition to validate Tip number input
  if (isNaN(tipPercentage)) {
    TipErrorText.innerText = "Please enter a valid number";
    tipInput.value = 0;
    return;
  } else {
    TipErrorText.innerText = "";
  }

  //--- Calculation for Total Amount
  const tipAmount = bill * tipPercentage;
  const total = bill + tipAmount;
  const perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

//=== Adding EventListener to Bill & Tip input fill
billTotalInput.addEventListener("keyup", calculateBill);
tipInput.addEventListener("keyup", calculateBill);

//=== Increasing people number Fn ...
const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill(); // call calculation Fn
};
increasePp.addEventListener("click", increasePeople);

//=== Increasing people number Fn ...
const decreasePeople = () => {
  //-- If condition( Guid Clause)
  if (numberOfPeople <= 1) {
    return;
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill(); // call Calculation Fn
};
decreasePp.addEventListener("click", decreasePeople);
