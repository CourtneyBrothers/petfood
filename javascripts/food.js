
"use strict";
/*jslint sub: true */

require("./jsonData");
const dogJsonData = require("./jsonData");


function displayPetfood(dogfood){
    
    let output = document.getElementById("output");
    console.log("dogfood response text",JSON.stringify(dogfood));
    
    console.log("dogfood array", dogfood);
    output.innerHTML = JSON.stringify(dogfood,null, 4);
   
}
dogJsonData.dogfoodData(displayPetfood);

