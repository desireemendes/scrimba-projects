let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

increment = () => {
count += 1;
countEl.innerText = count;
}

save = () => {
  saveCount = count + " - ";
  saveEl.textContent += saveCount;
  countEl.textContent = 0;
  count = 0;
}