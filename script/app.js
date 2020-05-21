// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather={};
weather.temperature={
    unit:"celsius"
}
const KELVIN = 273;
const key ="82005d27a116c2880c8f0fcb866998a0";
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError);

}else{
    notificationElement.style.display="block"
    notificationElement.innerHTML="<p>Browser doesn't Support Geolocation</p>";

}
 function setPosition(position){
     let latitude = position.coords.latitude;
     let longitude = position.coords.longitude;
    getWeather(latitude,longitude);
 }
 function showError(error){
     notificationElement.style.display="block";
     notificationElement.innerHTML=`<p> ${error.message}</p>`;
 }

 //get weather 
 
