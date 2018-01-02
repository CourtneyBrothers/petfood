"use strict";
require("./jsonData");
const dogJsonData = require("./jsonData");


function displayPetfood(dogfood){
    let output = document.getElementById("output");
   output.innerHTML =  `${dogfood}`; 
}

dogJsonData.dogfoodData(displayPetfood);
