//debouncing
// this is a generic debouncing function

let timeout;
function debounceCalculate() {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		calculateInterest();
	}, 1000);
}

async function calculateInterest() {
	const principal = document.getElementById('principal').value;
	const rate = document.getElementById('rate').value;
	const time = document.getElementById('time').value;
	const response = await fetch(
		`https://sum-server.100xdevs.com/interest?principal=${principal}&rate=${rate}&time=${time}`
	);
	const ans = await response.json();

	document.getElementById('result').innerHTML = ans.interest;
}
