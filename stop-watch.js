var second=00;
var ten=00;
var outputsecond = document.getElementById('seconds');
var outputten = document.getElementById('tens');
var buttonstart = document.getElementById('btn-start');
var buttonstop = document.getElementById('btn-stop');
var buttonreset = document.getElementById('btn-reset');
var interval;

buttonstart.addEventListener('click',()=>{
   clearInterval(Interval);
   interval=setInterval(startTime, 10);
    
});
buttonstop.addEventListener('click', () =>{
    clearInterval(Interval);
});
buttonreset.addEventListener('click', () =>{
    clearInterval(Interval);
    ten="00";
    second="00";
    outputten.innerHTML = ten;
    outputsecond.innerHTML = second;
});

function startTime(){
    ten++;
    if(ten<=9){
        outputten.innerHTML = "0" + ten;
    }
    if(ten > 9){
        outputten.innerHTML = ten;
    }
    if(ten > 99){
        second++;
        outputsecond.innerHTML = "0" + second;
        ten =0;
        outputten.innerHTML = "0" + ten;
    }
    if(second > 9){
        outputsecond.innerHTML = second;
    }
}