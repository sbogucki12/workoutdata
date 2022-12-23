function post() {
    $.getJSON("../secret.json").then((secret) => {
        pw = JSON.stringify(secret);
        token = pw.slice(13, 25);

        let data = {
            "pw": token,
            "index": 1269,
            "runId": 1332,
            "date": "2022-12-22T00:00:00",
            "duration": "1900-01-01T01:34:35",
            "length": 12.56,
            "type": "outdoor",
            "surface": "street",
            "pace": "1900-01-01T00:07:31",
            "sleepHours": 5,
            "sleepToBedTime": "1900-01-01T00:00:00",
            "sleepWakeTime": "1900-01-01T05:00:00",
            "runListenedTo": "none",
            "temperature": 50,
            "shoeAge": 22,
            "startTime": "1900-01-01T06:00:00"
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




    //date = $("#date").val();
    //length = $("#length").val();
    //duration = $("#duration").val();
    //surface = $("#surface").val();
    //outdoor = $("#outdoor").val();
    //bedtime = $("#bedtime").val();
    //wakeup = $("#wakeup").val();
    //data = {
    //    "date": date,
    //    "length": length,
    //    "duration": duration,
    //    "surface": surface,
    //    "outdoor": outdoor,
    //    "bedtime": bedtime,
    //    "wakeup": wakeup
    //};





//    for (let [key, value] of data) {

//        console.log(value);
//    }


