const elemente = document.querySelectorAll(".hidden");
const Observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else {entry.target.classList.remove("show")};
    });
});
elemente.forEach((e1)=> Observer.observe(e1));


 document.getElementById("button").addEventListener("click", function() {
  var body = document.body;
    if (body.style.backgroundColor === "black") {
         body.style.backgroundColor = "";
         body.style.color = "#333"; 
         
        } else {
         body.style.backgroundColor = "black";
         body.style.color = "white";}
  });



function getLocation() {
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}
      
   function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
     document.getElementById("location").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    }
      
    getLocation();
      