
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
    let runduration = convertDurationtoSeconds(document.getElementById("duration").value);
    let lengthvalue = document.getElementById("length").value;
    let paceInSeconds = runduration / lengthvalue;
    d = Number(paceInSeconds);

    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var mDisplay = m > 0 ? m : "";
    var sDisplay = s > 0 ? s : "";

    pacevalue = `1900-01-01T00:${mDisplay}:${sDisplay}`;

    let pw = document.getElementById("pw").value;
    let index = index3;
    let runId = runId3;
    let date = document.getElementById("date").value + "T00:00:00";
    let duration = "1900-01-01T" + document.getElementById("duration").value;
    let length = document.getElementById("length").value;
    let runningEnv = "outdoor";
    let surface = document.getElementById("surface").value;
    let pace = pacevalue;   
    let sleepToBedTime = "1900-01-01T" + document.getElementById("bedtime").value;
    let sleepWakeTime = "1900-01-01T" + document.getElementById("wakeup").value;
    let runListenedTo = "none";
    let temperature = 50;
    let shoeAge = parseInt(document.getElementById("shoeAge").value);
    let startTime = "1900-01-01T" + document.getElementById("starttime").value;;

    if (!document.getElementById("outdoor").checked) {
        runningEnv = 'indoor'
    }; 

    
    var wakeup = Date.parse("01 JAN 1970 " + document.getElementById("wakeup").value + ":00 GMT") + 86400000
    var bedtime = Date.parse("01 JAN 1970 " + document.getElementById("bedtime").value + ":00 GMT");
    var totalsleep = wakeup - bedtime; 

    function msToTime(duration) {            
        var minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;        

        return hours + ":" + minutes;
    }
    
    sleepHoursSpan = document.getElementById("totalsleephours");
    hoursdisplay = msToTime(totalsleep);
    sleepHoursSpan.append(hoursdisplay);
    hour = hoursdisplay.slice(0, 2)
    minutes = hoursdisplay.slice(3, 5);
    sleepHours = hour + "." + minutes; 
    time = sleepHours;  


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
            window.location.href = "https://localhost:7002/pages/admin/addrun-success.html";
            return response.json();
        } else {            
            window.location.href = "https://localhost:7002/pages/admin/addrun-error.html";
            return Promise.reject(response);
        }
    })
};

let durationEl = document.getElementById("duration");

durationEl.addEventListener("change", () => {
    let time = convertDurationtoSeconds(document.getElementById("duration").value);
    let lengthvalue = document.getElementById("length").value;
    let paceInSeconds = time / lengthvalue;
    d = Number(paceInSeconds);

    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var mDisplay = m > 0 ? m : "";
    var sDisplay = s > 0 ? s : "";

    let paceEl = document.getElementById("pacedisplay");
    pacedisplay = paceEl.appendChild(document.createElement("span"));
    pacedisplay.textContent = `${mDisplay}:${sDisplay}`
})

function convertDurationtoSeconds(paceduration) {
    const [pacehours, paceminutes, paceseconds] = paceduration.split(':');
    return Number(pacehours) * 60 * 60 + Number(paceminutes) * 60 + Number(paceseconds);
    
};






