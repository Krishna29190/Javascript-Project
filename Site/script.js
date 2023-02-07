function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    // var month = date.getMonth() + 1;
    var d = date.getDate();
    var year = date.getFullYear();
    var mm = fetchmonth();

    var session = "AM";

    // if(h == 0){
    //     h = 12;
    // }

     if(h > 12){
         h = h - 12;
         session = "PM";
     }

     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;

    var time =  mm+" " + d + "," + " " + year + ";" + " " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("timer").innerText = time;
    document.getElementById("timer").textContent = time;


    setTimeout(showTime, 1000);

}

showTime();


//captcha
function captcha() {


    let x = parseInt(Math.random() * 100000);
    document.getElementById("demo").innerHTML = x;

}


captcha();

//captcha

//popup close

function closepop() {
    document.getElementById('popup').style.display = "none";

}

//popup close

//switch//

function fetchmonth() {
var ddate = new Date();
    var month = ddate.getMonth()+ 1;
   

    switch (month) {
        case 1:
            month = "January";
            break;

        case 2:
            month = "February";
            break;

        case 3:
            month = "March";
            break;

        case 4:
            month = "April";
            break;

        case 5:
            month = "May";
            break;

        case 6:
            month = "June";
            break;

        case 7:
            month = "July";
            break;

        case 8:
            month = "August";
            break;

        case 9:
            month = "September";
            break;

        case 10:
            month = "October";
            break;

        case 11:
            month = "November";
            break;

        case 12:
            month = "December";
            break;

    }

    // document.getElementById("timer").innerHTML=month;
return(month);
}

fetchmonth();
