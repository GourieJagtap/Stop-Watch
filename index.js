var min=00;
var hr=00;
var sec=00;

var timer=false;

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    min=0;
    hr=0;
    sec=0;

    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    setTimeout('stopwatch()',1000);
}

function stopwatch(){
    if (timer==true){
        sec=sec+1;
        if(sec==60){
            min=min+1;
            sec=0;
        }if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        var hrstring=hr;
        var minstring=min;
        var secstring=sec;

        if (hr<10)
        {
            hrstring="0" +hrstring;
        }
        if (sec<10)
        {
            secstring="0" +secstring;
        }
        if (min<10)
        {
            minstring="0" +minstring;
        }

        document.getElementById('hr').innerHTML=hrstring;
        document.getElementById('min').innerHTML=minstring;
        document.getElementById('sec').innerHTML=secstring;
        setTimeout('stopwatch()',1000);
    }
}
