import { CurrentCounter, NewCounter } from "../component/counter.js";

const button = document.getElementById("counterButton");
const result = document.getElementById("result");

let currentCount = 0;

button.onclick = function () {
  const newCount = NewCounter();
  result.textContent = `counter bertambah ${newCount}`;
  console.log(result);
};

result.textContent = `counter belum di klik! ${currentCount}`;
