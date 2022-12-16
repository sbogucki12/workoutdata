// Table JavaScript - Begin


$(document).ready(function() {
	return $.getJSON("./runs.json").then((runData) => {
		displayData = runData.map(row => ({ 
			date: row.date.slice(0, 10), 
			duration: row.duration.slice(11), 
			length: row.length, 
			type: row.type, 
			surface: row.surface, 
			pace: row.pace.slice(11)
			}))
		
		main = $("#table--main")
		var tbl = () => {
			main.append("<table border==\"1\"><tr>");
			for (key in displayData[0]) {
				main.append('<td style="text-align: center">' + key + '</td>');
			}

			main.append("</tr>");
			for (var i = 0; i < displayData.length; i++) {
				main.append('<tr>');
				for (key in displayData[i]) {
					main.append('<td style="padding: 5px;">' + displayData[i][key] + '</td>');
				}
				main.append('</tr>');
			}
			main.append("</table>");
		}

		main.append(tbl);
	});
});

// Table JavaScript End



// Sandbox JavaScript Brgin


//function testFunction() {
//	document.addEventListener('click', function () {

//		var element = document.getElementById("index--main");

//		element.classList.toggle("index--main");

//	})
//};

// Sandbox JavaScript End 

