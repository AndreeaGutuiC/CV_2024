const elem = document.getElementById("location");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{elem.innerHTML="Geolocation not supported.";}
}

function showPosition(location){
    elem.innerHTML = "Latitude : " + location.coords.latitude + "<br>Longitude : " + location.coords.longitude;
}

//assign getLocation() to button
document.getElementById("loc_btn").onclick = getLocation;