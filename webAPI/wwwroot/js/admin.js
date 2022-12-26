
async function getRun() {
   await $.getJSON("../secret.json").then((secret) => {
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
            }).then(run => {
                localStorage.setItem("runId", run[0].runId);
                localStorage.setItem("index", run[0].index);
                localStorage.setItem("shoeAge", run[0].shoeAge);
            })
    });
};

getRun();

var runId1 = localStorage.getItem('runId'); 
var runId2 = parseInt(runId1);
var runId3 = runId2 + 1; 

var index1 = localStorage.getItem('index');
var index2 = parseInt(index1);
var index3 = index2 + 1; 

shoeAgeSpan = document.getElementById("previousshoeage");
previousShoeAgeString = localStorage.getItem('shoeAge');
previousShoeAgeInt = parseInt(previousShoeAgeString);
shoeAgeSpan.append(previousShoeAgeInt);

function post() {  
    let pw = document.getElementById("pw").value;
    let index = index3;
    let runId = runId3;
    let date = document.getElementById("date").value + "T00:00:00";
    let duration = "1900-01-01T" + document.getElementById("duration").value;
    let length = document.getElementById("length").value;
    let runningEnv = "outdoor";
    let surface = document.getElementById("surface").value;
    let pace = "1900-01-01T00:07:31";
    let sleepHours = 6;
    let sleepToBedTime = "1900-01-01T" + document.getElementById("bedtime").value;
    let sleepWakeTime = "1900-01-01T" + document.getElementById("wakeup").value;
    let runListenedTo = "none";
    let temperature = 50;
    let shoeAge = 22;
    let startTime = "1900-01-01T" + "06:30:00";

    if (!document.getElementById("outdoor").checked) {
        runningEnv = 'indoor'
    }; 

    
    var wakeup = Date.parse("01 JAN 1970 " + document.getElementById("wakeup").value + ":00 GMT") + 86400000
    var bedtime = Date.parse("01 JAN 1970 " + document.getElementById("bedtime").value + ":00 GMT");
    var totalsleep = wakeup - bedtime; 

    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes;
    }
    
    sleepHoursSpan = document.getElementById("totalsleephours");
    hoursdisplay = msToTime(totalsleep);
    sleepHoursSpan.append(hoursdisplay);
    //TO DO: CONVERT SLEEPING TIMES
    //WAKE UP: TIME + 24
    //TOTAL SLEEP: WAKE UP - BED TIME

    var type = runningEnv;

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

}