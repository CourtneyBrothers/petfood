"use strict";

// require("./food");
const $ = require("jquery");

module.exports.dogfoodData = $.ajax({
    url: "../JSON/petfood.json"

}).done( (dogData)=> {
    console.log("Ajax done",dogData,"dogData brands",dogData.dog_brands);
    dogData.dog_brands.forEach(element => {
        let brandsArray = [];
        console.log("element",element);
        brandsArray.push(element);
        console.log("brands array",brandsArray);
    });
}).fail((error)=>{
    console.log("error", error.statusText);
});


// module.exports.dogfoodData = function(callback){
//     const loader = new XMLHttpRequest();
//     loader.open("GET", "JSON/petfood.json");
//     loader.send(); 
//     loader.addEventListener("load", function(){
//         const dogfood = JSON.parse(event.target.responseText);
//         callback(dogfood);
       
        
//     });
// };

