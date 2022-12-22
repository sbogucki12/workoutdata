function post() {       
    date = $("#date").val();
    length = $("#length").val();
    duration = $("#duration").val();
    surface = $("#surface").val();
    outdoor = $("#outdoor").val();
    bedtime = $("#bedtime").val();
    wakeup = $("#wakeup").val();
    data = {
        "date": date, 
        "length": length,
        "duration": duration, 
        "surface": surface,
        "outdoor": outdoor, 
        "bedtime": bedtime, 
        "wakeup": wakeup
    };

    
    console.log(data)    
};

