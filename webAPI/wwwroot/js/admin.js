function post() {
    $.getJSON("../secret.json").then((secret) => {
        pword = JSON.stringify(secret);
        token = pword.slice(13, 25);
        
        let pw = token; 
        let index = 1270; 
        let runId = 1333; 
        let date = document.getElementById("date").value + "T00:00:00";
        let duration = "1900-01-01T" + document.getElementById("duration").value;
        let length = parseInt(document.getElementById("length").value);
        let type = "outdoor";
        let surface = document.getElementById("surface").value;
        let pace = "1900-01-01T00:07:31";
        let sleepHours = 6; 
        let sleepToBedTime = "1900-01-01T" + document.getElementById("bedtime").value;
        let sleepWakeTime = "1900-01-01T" + document.getElementById("wakeup").value;
        let runListenedTo = "none";
        let temperature = 50; 
        let shoeAge = 22; 
        let startTime = "1900-01-01T" +"06:30:00";

        let data = {
            "pw": pw,
            "index": index,
            "runId": runId,
            "date": date,
            "duration": duration,
            "length": length,
            "type": type,
            "surface": surface,
            "pace": pace,
            "sleepHours": sleepHours,
            "sleepToBedTime": sleepToBedTime,
            "sleepWakeTime": sleepWakeTime,
            "runListenedTo": runListenedTo,
            "temperature": temperature,
            "shoeAge": shoeAge,
            "startTime": startTime
        }

       fetch('https://localhost:7002/Run/PostRun', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Origin': "*"
            },
            body: JSON.stringify(data),
            referrer: 'no-referrer'
        }).then((response) => {
            if (response.ok) {
                console.log(response);
                return response.json();
            } else {   
                console.log(response);
                return Promise.reject(response);
            }
        })
    })
}