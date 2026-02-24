

function getCounterValue() {
  const counterEl = document.getElementById("counter");
  const n = parseInt(counterEl.textContent, 10);
  return Number.isNaN(n) ? 0 : n;
}

function setCounterValue(value) {
  document.getElementById("counter").textContent = String(value);
}


function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  setCounterValue(getCounterValue() - 1);
}


function runForLoop() {
  const n = getCounterValue();
  const parts = [];
  for (let i = 0; i <= n; i++) {
    parts.push(i);
  }
  document.getElementById("forLoopResult").textContent = parts.join(" ");
}


function showOddNumbers() {
  const n = getCounterValue();
  const odds = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) odds.push(i);
  }
  document.getElementById("oddNumberResult").textContent = odds.join(" ");
}


function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];
  for (let i = n; i >= 5; i--) {
    if (i % 5 === 0) arr.push(i);
  }
 
  console.log(arr);
}


function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };
  console.log(car);
}


function loadCar(which) {

  let selected;
  if (which === 1) selected = window.carObject1;
  else if (which === 2) selected = window.carObject2;
  else if (which === 3) selected = window.carObject3;

  if (!selected) return;

  document.getElementById("carType").value = selected.cType ?? "";
  document.getElementById("carMPG").value = selected.cMPG ?? "";
  document.getElementById("carColor").value = selected.cColor ?? "";
}


function changeColor(which) {
  const p = document.getElementById("styleParagraph");
  if (!p) return;

  if (which === 1) p.style.color = "red";
  else if (which === 2) p.style.color = "green";
  else if (which === 3) p.style.color = "blue";
}
