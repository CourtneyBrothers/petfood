"use strict";
require("./jsonData");
const dogJsonData = require("./jsonData");


function displayPetfood(dogfood){
    
    let output = document.getElementById("output");
    for (var property in dogfood){
        output.innerHTML +=  `${property}  : ${dogfood[property]}`; 
    }
}
dogJsonData.dogfoodData(displayPetfood);
