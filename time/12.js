var today = new Date()
millisecond = today.getMilliseconds()
second = today.getSeconds()
minute = today.getMinutes()
hour = today.getHours()
amorpm = "am"
if(hour > 12)
{
    hour = hour - 12
    amorpm = "pm"
} 
if(hour == 12)
{
    amorpm = "pm"
}
if(hour < 10)
{       
    hour = "0" + hour
}
if(minute < 10)
{
    minute = "0" + minute
}
if(second < 10)
{
    second = "0" + second
}
hex = "#" + hour + minute + second
truetime = hour + ":" + minute + ":" + second + " " + amorpm
document.getElementById("hexmoment").innerHTML = hex
document.getElementById("truetime").innerHTML = truetime
document.getElementById("bodyakabackgroundcolor").style.backgroundColor = hex
console.log("Script ran.")
checktime()
function checktime()
{
setTimeout(function() {
    var today = new Date()
    millisecond = today.getMilliseconds()
    second = today.getSeconds()
    minute = today.getMinutes()
    hour = today.getHours()
    amorpm = "am"
    if(hour > 12)
    {
        hour = hour - 12
        amorpm = "pm"
    } 
    if(hour < 10 || hour > 22)
    {       
        hour = "0" + hour
    }
    if(minute < 10)
    {
        minute = "0" + minute
    }
    if(second < 10)
    {
        second = "0" + second
    }
    hex = "#" + hour + minute + second
    truetime = hour + ":" + minute + ":" + second + " " + amorpm
    document.getElementById("hexmoment").innerHTML = hex
    document.getElementById("truetime").innerHTML = truetime
    document.getElementById("bodyakabackgroundcolor").style.backgroundColor = hex
    console.log("Script ran.")
    checktime()
    }, 100);
}