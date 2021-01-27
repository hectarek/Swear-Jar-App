const button = document.getElementById("button");
const amount = document.getElementById("amount");

let total = 0;

button.addEventListener('click', () => {
    total += 0.25
    amount.innerHTML = total.toFixed(2);
})