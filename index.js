let count = 0;
let display = document.getElementById("display");
let saves = document.getElementById("saves");

function increment() {
	count++;
	display.textContent = count;
}

function decrement() {
	count--;
	display.textContent = count;
}

function reset() {
	count = 0;
	display.textContent = count;
}
