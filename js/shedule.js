let day = ["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];
let months = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень", "Жовтень", "Листопад", "Грудень"];
let myData = new Date();
let fullData = "Сьогодні : " + myData.getDate() + " " + months[myData.getMonth()] + " "+ myData.getFullYear()+", "+ day[myData.getDay()];
let curenthours = myData.getHours();
let curentminutes = myData.getMinutes();
if(curenthours<10){
    curenthours = "0"+curenthours;
}
if(curentminutes<10){
    curentminutes = "0"+curentminutes;
}
let fulltime = "  " + curenthours +" : "+curentminutes;


document.querySelector('.data').innerText = fullData;
document.querySelector('.hours').innerText = fulltime;