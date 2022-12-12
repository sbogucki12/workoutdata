
//TODO: FIX THIS
//document.addEventListener("DOMContentLoaded", function (event) {
//	fetch('./runs.json')
//		.then(response => response.json())
//		.then(data => console.log(data))
//		.catch(error => console.log(error));
//});

import myJson from '../runs.json' assert {type: 'json'};

function testFunction() {
	document.addEventListener('click', function () {

		var element = document.getElementById("index--main");

		element.classList.toggle("index--main");

	})
};

