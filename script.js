let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');


setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >=12 ? "PM" : "AM";
    
    h = h>12 ? h-12:h;
    h = h<=9 ? "0"+h:h;
    m = m<=9 ? "0"+m:m;
    s = s<=9 ? "0"+s:s;


    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = ap;
});


