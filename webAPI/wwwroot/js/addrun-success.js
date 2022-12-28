$(document).ready(function () {
    $.getJSON("../secret.json").then((secret) => {
        data = JSON.stringify(secret);
        token = data.slice(13, 25);

        fetch('https://localhost:7002/Run/GetRuns?' + new URLSearchParams({
            numberOfRuns: 1
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
                console.log(data)
                var dateEl = document.getElementById("date");
                var lengthEl = document.getElementById("length");
                var durationEl = document.getElementById("duration");
                var paceEl = document.getElementById("pace");
                var sleepEl = document.getElementById("sleep");
                var shoeageEl = document.getElementById("shoeage");

                dateDisplay = dateEl.appendChild(document.createElement('span'));
                dateDisplay.textContent = displayData[0].date;
                dateDisplay.classList.add("addrun-success--value");

                lengthDisplay = lengthEl.appendChild(document.createElement('span'));
                lengthDisplay.textContent = displayData[0].length;
                lengthDisplay.classList.add("addrun-success--value");

                durationDisplay = durationEl.appendChild(document.createElement('span'));
                durationDisplay.textContent = displayData[0].duration;
                durationDisplay.classList.add("addrun-success--value");

                paceDisplay = paceEl.appendChild(document.createElement('span'));
                paceDisplay.textContent = displayData[0].pace;
                paceDisplay.classList.add("addrun-success--value");

                sleepDisplay = sleepEl.appendChild(document.createElement('span'));
                sleepDisplay.textContent = data[0].sleepHours;
                sleepDisplay.classList.add("addrun-success--value");

                shoeageDisplay = shoeageEl.appendChild(document.createElement('span'));
                shoeageDisplay.textContent = data[0].shoeAge;
                shoeageDisplay.classList.add("addrun-success--value");
                
            }).catch((err) => {
                console.warn('Something went wrong: ', err)
            })
    });
});