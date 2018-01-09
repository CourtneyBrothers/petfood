"use strict";

// require("./food");
const $ = require("jquery");

module.exports.dogfoodData = $.ajax({
    url: "../JSON/petfood.json"

}).done( (dogData)=> {
    console.log("Ajax done",dogData,"dogData brands",dogData.dog_brands);
    dogData.dog_brands.forEach( (brand) => {
        //loop through brands
        $("#output").append(`<h3>${brand.name}</h3>`);
        //loop through types
            brand.types.forEach( (brandtype) => {
                $("#output").append(`<p>${brandtype.type}</p>`);
            //loop through prices
                

            });
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

