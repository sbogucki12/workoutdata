function setInitialTable(data) {     
    displayData = data.map(row => ({
        Date: row.date.slice(0, 10),
        Duration: row.duration.slice(11),
        Length: row.length,
        Type: row.type.charAt(0).toUpperCase() + row.type.slice(1),
        Surface: row.surface.charAt(0).toUpperCase() + row.surface.slice(1),
        Pace: row.pace.slice(11)
    }));

    main = $("#table--main")
    var tbl = () => {
        main.append("<table border==\"1\"><tr>");
        for (key in displayData[0]) {
            main.append('<td style="text-align: center">' + key + '</td>');
        }
        main.append('<td>More Info</td>');
        main.append("</tr>");
        for (var i = 0; i < displayData.length; i++) {
            main.append('<tr>');
            for (key in displayData[i]) {
                main.append('<td style="padding: 5px;">' + displayData[i][key] + '</td>');
            };
            main.append('<td style="text-align: center">🔎</td>')
            main.append('</tr>');
        }
        main.append("</table>");
    }

    main.append(tbl);
}

function setAdditionalRows(data) {    
    numberOfRuns = parseInt(localStorage.getItem('counter')) - 5;   
    counter = parseInt(localStorage.getItem('counter'));
    data = data.slice(numberOfRuns, counter);
    localStorage.setItem('counter', counter);
    
    displayData = data.map(row => ({
        Date: row.date.slice(0, 10),
        Duration: row.duration.slice(11),
        Length: row.length,
        Type: row.type.charAt(0).toUpperCase() + row.type.slice(1),
        Surface: row.surface.charAt(0).toUpperCase() + row.surface.slice(1),
        Pace: row.pace.slice(11)
    }));

    main = $("#table--main")
    var tbl = () => {
        for (var i = 0; i < displayData.length; i++) {
            main.append('<tr>');
            for (key in displayData[i]) {
                main.append('<td style="padding: 5px;">' + displayData[i][key] + '</td>');
            };
            main.append('<td style="text-align: center">🔎</td>')
            main.append('</tr>');
        }
        main.append("</table>");
    }

    main.append(tbl);
}

function getRuns(numberOfRuns, initial) {
    $.getJSON("../secret.json").then((secret) => {
        data = JSON.stringify(secret);
        token = data.slice(13, 25);

        fetch('https://localhost:7002/Run/GetRuns?' + new URLSearchParams({
            numberOfRuns: numberOfRuns
        }),
            {
                method: 'POST',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'Access-Control-Origin': "*"
                },
                body: JSON.stringify(token),
                referrer: 'no-referrer'
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then((data) => {
                if (initial) {                    
                    setInitialTable(data);
                } else {                  
                    setAdditionalRows(data);
                }                
            }).catch((err) => {
                console.warn('Something went wrong: ', err)
            })
    });
}

localStorage.setItem('counter', 5);

$(document).ready(function () { 
    counter = parseInt(localStorage.getItem('counter'));
    getRuns(counter, true);
});



$('#btn-fivemore').click(() => {
    counter = parseInt(localStorage.getItem('counter'));
    counter = counter + 5; 
    localStorage.setItem('counter', counter);
    getRuns(counter, false);
});