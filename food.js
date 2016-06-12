var dogchow = new XMLHttpRequest();
var catchow = new XMLHttpRequest();

dogchow.addEventListener("load", loadedFile);
dogchow.addEventListener("failed", failedFile);

dogchow.open("GET", "dogfood.json");
dogchow.send();


function loadedFile(){
  var firstList = JSON.parse(dogchow.responseText);
// run firstList through function to apply to DOM
};

function failedFile(){
  alert("file failed to load");
};

