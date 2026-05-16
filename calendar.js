function showTime(){
    var date = new Date();
    var years = date.getFullYear();
    var months = date.getMonth() + 1;
    var days = date.getDay();

    years = (years < 10) ? "0" + years : years;
    months = (months < 10) ? "0" + months : months;
    days = (days < 10) ? "0" + days : days;

    var time = days + "/" + months + "/" + years + " "
    document.getElementById('MyClockDisplay').innerHTML = time
    setTimeout(showTime, 1000)
}

showTime()