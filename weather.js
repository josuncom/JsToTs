function onGeoOK(position){
  console.log(position);
}

function onGeoError(){
  alert("Cannot find you. There is no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
