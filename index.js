//Define var to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;

//var to hold setinterval() function
let interval = null;

//define var to hold stopwatch status.
let status = "stopped";
//stopwatch function (logic to determine when to increment next value)
function stopwatch(){
    seconds++

    //logic to determine when to increment next value
    if (seconds / 60 == 1){
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 == 1){
        minutes = 0;
        hours++;
    }



    if (seconds < 10){
        displayseconds = "0" + seconds.toString();
        
    }
    else{
        displayseconds = seconds;
    }

    if (minutes < 10){
        displayminutes = "0" + minutes.toString();
        
    }
    else{
        displayminutes = minutes;
    }

    if (hours < 10){
        displayhours = "0" + hours.toString();
        
    }
    else{
        displayseconds = hours;
    }

    //Display the updated time.
    document.getElementById("display").innerHTML = displayhours + ":" +  displayminutes + ":" + displayseconds 
}

// window.setInterval(stopwatch,1000);

function startStop(){
    if (status === "stopped"){
        console.log(status);
        //start the stopped watch(by calling the ser interval funciton())
        interval = window.setInterval(stopwatch,1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
        
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function restart(){
   window.clearInterval(interval);
   seconds = 0;
   minutes = 0;
   hours = 0;
    document.getElementById("display").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("startStop").innerHTML = "Start";
}