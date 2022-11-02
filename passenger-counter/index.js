let countEl = document.getElementById("count-el")
let count = 0;

increment = () => {
count = count += 1
countEl.innerText = count;
console.log(count)
}