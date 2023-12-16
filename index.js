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
function save() {
	let savesNum = ` ${count}, `;
	saves.textContent += savesNum;

	// Check if the saves element is full
	if (saves.scrollHeight > saves.clientHeight) {
		saves.textContent = "Memory full. Please use the AC to clear the memory.";
		// Disable the save button or take any other necessary action
		document.getElementById("btn-save").disabled = true;
	} else {
		// Reset the display and count for the next input
		display.textContent = 0;
		count = 0;
		// Enable the save button
		document.getElementById("btn-save").disabled = false;
	}
}

function allClear() {
	reset();
	saves.textContent = `Previous entries:`;
	document.getElementById("btn-save").disabled = false;
}
