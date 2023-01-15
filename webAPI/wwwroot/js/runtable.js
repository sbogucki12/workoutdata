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

function getRuns(offset, limit, phase) {
    $.getJSON("../secret.json").then((secret) => {
        data = JSON.stringify(secret);
        token = data.slice(13, 25);

        fetch('https://localhost:7002/Run/Get?' + new URLSearchParams({
            offset: offset, 
            limit: limit
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
                if (phase == 'initial') {                    
                    setInitialTable(data);
                }

                if(phase == 'fivemore') {                  
                    setAdditionalRows(data);
                } 
                if (phase == 'showmore') {
                    console.log(data.length)
                    setAdditionalRows(data);
                }
                if (phase == 'showrecent') {
           
                    setInitialTable(data);
                }
            }).catch((err) => {
                console.warn('Something went wrong: ', err)
            })
    });
}

localStorage.setItem('offset', 0);

$(document).ready(function () { 
    offset = 0;
    getRuns(offset, 5, 'initial');
});

$('#btn-fivemore').click(() => { 
    getRuns(offset, 5, 'fivemore');
    offsetPlusFive = offset + 5;
    localStorage.setItem('offset', offsetPlusFive);
});

$('#btn-showmore').click(() => {
    getRuns(offset, 5000, 'showmore');
    
})

$('#btn-showFiveLess').click(() => {
    offset = parseInt(localStorage.getItem('offset'));
    getRuns(offset, 5, 'showrecent');
    counter = 5; 
    localStorage.setItem('counter', counter); 
})