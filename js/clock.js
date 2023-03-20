const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const sec_dot = document.querySelector('.sec_dot');
const min_dot = document.querySelector('.min_dot');
const hrs_dot = document.querySelector('.hrs_dot');

var deg_sec = 0;
var deg_min = 0;
var deg_hrs = 0;

setInterval(() => {
  
    var date = new Date;

    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hrs = date.getHours();


    
if (hrs >12) {
    hrs = hrs-12;
    document.getElementById('pm').style.fontSize ='20px';
    document.getElementById('pm').style.color ='#3fb4fc';
    document.getElementById('am').style.fontSize ='18px';
    document.getElementById('am').style.textDecoration = 'line-through';
}else{
    document.getElementById('am').style.fontSize ='20px';
    document.getElementById('am').style.color ='#3fb4fc';
    document.getElementById('pm').style.fontSize ='18px';
    document.getElementById('pm').style.textDecoration = 'line-through';
}

var currhrs = hrs;
var currmin = min/5;
console.log(currmin);
currmin = Math.floor(currmin);
deg_sec = sec*6;
deg_min = min*6;
deg_hrs = hrs*30;
line1.style.transform = 'rotate('+deg_sec+'deg)';
sec_dot.style.transform = 'rotate('+deg_sec+'deg)';
line2.style.transform = 'rotate('+deg_min+'deg)';
min_dot.style.transform = 'rotate('+deg_min+'deg)';
line3.style.transform = 'rotate('+deg_hrs+'deg)';
hrs_dot.style.transform = 'rotate('+deg_hrs+'deg)';


document.getElementById('hrs-dis').innerHTML = hrs;
document.getElementById('mins-dis').innerHTML = min;
document.getElementById('secs-dis').innerHTML = sec;

if (currmin === 1) {
    document.getElementById('one').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';

}else if (currmin === 2) {
    document.getElementById('two').style.color = 'red';

    document.getElementById('one').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 3) {
    document.getElementById('three').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 4) {
    document.getElementById('four').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 5) {
    document.getElementById('five').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 6) {
    document.getElementById('six').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 7) {
    document.getElementById('seven').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 8) {
    document.getElementById('eight').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 9) {
    document.getElementById('nine').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 10) {
    document.getElementById('ten').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 11) {
    document.getElementById('eleven').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('one').style.color = 'white';
    document.getElementById('twelve').style.color = 'white';
}else if (currmin === 12) {
    document.getElementById('twelve').style.color = 'red';

    document.getElementById('two').style.color = 'white';
    document.getElementById('three').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('seven').style.color = 'white';
    document.getElementById('eight').style.color = 'white';
    document.getElementById('nine').style.color = 'white';
    document.getElementById('ten').style.color = 'white';
    document.getElementById('eleven').style.color = 'white';
    document.getElementById('one').style.color = 'white';
}


if (currhrs === 1) {
    document.getElementById('one').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';

}else if (currhrs === 2) {
    document.getElementById('two').style.color = 'yellow';

    // document.getElementById('one').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 3) {
    document.getElementById('three').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 4) {
    document.getElementById('four').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 5) {
    document.getElementById('five').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 6) {
    document.getElementById('six').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 7) {
    document.getElementById('seven').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 8) {
    document.getElementById('eight').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 9) {
    document.getElementById('nine').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 10) {
    document.getElementById('ten').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 11) {
    document.getElementById('eleven').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
    // document.getElementById('twelve').style.color = 'white';
}else if (currhrs === 12) {
    document.getElementById('twelve').style.color = 'yellow';

    // document.getElementById('two').style.color = 'white';
    // document.getElementById('three').style.color = 'white';
    // document.getElementById('four').style.color = 'white';
    // document.getElementById('five').style.color = 'white';
    // document.getElementById('six').style.color = 'white';
    // document.getElementById('seven').style.color = 'white';
    // document.getElementById('eight').style.color = 'white';
    // document.getElementById('nine').style.color = 'white';
    // document.getElementById('ten').style.color = 'white';
    // document.getElementById('eleven').style.color = 'white';
    // document.getElementById('one').style.color = 'white';
}

}, 1000);

