
let latitude = document.getElementById("get-latitude");
let longitude = document.getElementById("get-longitude");

function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(hello,error);
  } else {
    alert("Error! Your browser does not support html5 geolocation");
  }

}

function hello(position) {
  const coords = position.coords.longitude;
  const caards = position.coords.latitude;
  latitude.innerHTML = "latitude : " + coords;
  longitude.innerHTML = "longitude : " + caards;
}

function error() {
  latitude.innerHTML = "Something Went Wrong plese try again....";
  longitude.innerHTML = "";
}