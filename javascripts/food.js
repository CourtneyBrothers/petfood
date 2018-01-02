
"use strict";
/*jslint sub: true */

require("./jsonData");
const dogJsonData = require("./jsonData");


function displayPetfood(dogfood){
    
    let output = document.getElementById("output");
    console.log("dogfood response text",dogfood);
    let dogfoodArray = Array.from(dogfood);
    console.log("dogfood array", dogfood);
    for (let i=0; i < dogfoodArray.length; i++){
        
    }
}
dogJsonData.dogfoodData(displayPetfood);
