var dogchow = new XMLHttpRequest();
var catchow = new XMLHttpRequest();

dogchow.addEventListener("load", loadedFile);
dogchow.addEventListener("failed", failedFile);
catchow.addEventListener("load", cattedFile);
catchow.addEventListener("failed", failedFile);

dogchow.open("GET", "dogfood.json");
dogchow.send();
catchow.open("GET", "catfood.json");
catchow.send();

var firstList = 0;
var secondList = 0;
function loadedFile(){
  firstList = JSON.parse(dogchow.responseText);
  applyInfo(firstList);
};

function cattedFile(){
  secondList = JSON.parse(catchow.responseText);
  applyCata(secondList);
};

function failedFile(){
  alert("file failed to load");
};

var output = document.getElementById("products");

function applyInfo(object){

  for (var i = 0; i < object.dog_brands.length; i++) {
    var mainCans = document.createElement("div");
    mainCans.className = "name";
    mainCans.appendChild(document.createTextNode(object.dog_brands[i].name));
    document.getElementById("products").appendChild(mainCans);
    for (var j = 0; j < object.dog_brands[i].types.length; j++) {
      var types = document.createElement("ul");
      types.className = "type";
      mainCans.appendChild(types)
      var type = document.createElement("li");
      types.appendChild(type);
      type.appendChild(document.createTextNode(object.dog_brands[i].types[j].type));
      for (var k = 0; k < object.dog_brands[i].types[j].volumes.length; k++) {
        var volumes = document.createElement("ul");
        volumes.className = "volume";
        types.appendChild(volumes)
        var name = document.createElement("li");
        volumes.appendChild(name);
        name.appendChild(document.createTextNode(object.dog_brands[i].types[j].volumes[k].name + " - " + object.dog_brands[i].types[j].volumes[k].price));
     }

}}
};

function applyCata(object){

  for (var i = 0; i < object.cat_brands.length; i++) {
    var mainCans = document.createElement("div");
    mainCans.className = "name";
    mainCans.appendChild(document.createTextNode(object.cat_brands[i].name));
    document.getElementById("products2").appendChild(mainCans);
    var breeds = document.createElement('div');
    breeds.className = "breeds";
    mainCans.appendChild(breeds)
    var breedtypes = object.cat_brands[i].breeds.join(", ");
    breeds.appendChild(document.createTextNode("For breeds: " + breedtypes));
    for (var j = 0; j < object.cat_brands[i].types.length; j++) {
      var types = document.createElement("ul");
      types.className = "type";
      mainCans.appendChild(types)
      var type = document.createElement("li");
      types.appendChild(type);
      type.appendChild(document.createTextNode(object.cat_brands[i].types[j].type));
      for (var k = 0; k < object.cat_brands[i].types[j].volumes.length; k++) {
        var volumes = document.createElement("ul");
        volumes.className = "volume";
        types.appendChild(volumes)
        var name = document.createElement("li");
        volumes.appendChild(name);
        name.appendChild(document.createTextNode(object.cat_brands[i].types[j].volumes[k].name + " - " + object.cat_brands[i].types[j].volumes[k].price));
     }

}}
};











