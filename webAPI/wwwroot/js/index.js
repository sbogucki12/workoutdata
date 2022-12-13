// Table JavaScript - Begin


$(document).ready(function() {
	return $.getJSON("./runs.json").then((runData) => {
		
		main = $("#table--main")
		var tbl = () => {
			document.write("<table border==\"1\"><tr>");
			for (key in runData[0]) {
				document.write('<td>' + key + '</td>');
			}

			document.write("</tr>");
			for (var i = 0; i < runData.length; i++) {
				document.write('<tr>');
				for (key in runData[i]) {
					document.write('<td>' + runData[i][key] + '</td>');
				}
				document.write('</tr>');
			}
			document.write("</table>");
		}

		main.append(tbl);
	});
});

// Table JavaScript End



// Sandbox JavaScript Brgin


function testFunction() {
	document.addEventListener('click', function () {

		var element = document.getElementById("index--main");

		element.classList.toggle("index--main");

	})
};

// Sandbox JavaScript End 

