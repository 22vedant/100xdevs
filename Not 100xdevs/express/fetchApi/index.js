const button = document.querySelector('.api').addEventListener('click', () => {
	// alert('hello');
	// console.log('hello from js side');
	driver();
});

function driver() {
	fetch('https://fakerapi.it/api/v1/persons')
		.then((response) => response.json())
		.then((data) => console.log(data));
}
