
function showTime(){
const  today = new Date();
let hrsNow = today.getHours();
let minsNow = today.getMinutes();
let secNow = today.getSeconds();

//Adding Od git Front To 
if(secNow<10)
secNow = "0"+secNow;

if(minsNow<10)
minsNow = "0"+minsNow;

if(hrsNow<10)
secNow = "0"+secNow;

//display tome 

document.getElementById("hrs").innerHTML=hrsNow +" :"; 
document.getElementById("mins").innerHTML=minsNow+" :"; 
document.getElementById("sec").innerHTML= secNow; 
}

function showDate(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var currentdate =  date.getDate();
    var currentMonth = date.getUTCMonth();
    document.getElementById("date").innerHTML = currentdate + "-" ; 
    document.getElementById("month").innerHTML = months[currentMonth] ;
    
}

//  showTime();
 setInterval(showTime,100);
showDate();


