var min=0;
var hr=0;
var sec=0;

var timer=false;

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){

}

function stopwatch(){
    if (timer==true){
        sec=sec+1;
        if(sec==60){
            min=min+1;
            sec=0;

        }
        document.getElementById('hr').innerHTML=hr;
        document.getElementById('sec').innerHTML=sec;
        settimeout('stopwatch()',100);
    }
}
