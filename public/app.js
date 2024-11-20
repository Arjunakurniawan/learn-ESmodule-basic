import { CurrentCounter, NewCounter } from "../component/counter.js";

const button = document.getElementById("counterButton");
const result = document.getElementById("result");

button.onclick = function () {
  const newCount = NewCounter();
  result.textContent = `counter bertambah ${newCount}`;
  console.log(result);
};

result.textContent = `counter belum di klik! ${CurrentCounter}`;
