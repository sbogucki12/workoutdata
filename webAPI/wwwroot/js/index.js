$(document).ready(function () {
    $.getJSON("../secret.json").then((secret) => {
        data = JSON.stringify(secret);
        token = data.slice(13, 25);

        fetch('https://localhost:7002/Run/GetRuns?' + new URLSearchParams({
            numberOfRuns: 5
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
                displayData = data.map(row => ({
                    date: row.date.slice(0, 10),
                    duration: row.duration.slice(11),
                    length: row.length,
                    type: row.type,
                    surface: row.surface,
                    pace: row.pace.slice(11)
                }));                

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
            }).catch((err) => {
                console.warn('Something went wrong: ', err)
            })       
    });
});

// Table JavaScript End



//Sandbox JavaScript Begin
//Sandbox JavaScript End




