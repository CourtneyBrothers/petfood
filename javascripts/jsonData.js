"use strict";

require("./food");

module.exports.dogfoodData = function(callback){
    const loader = new XMLHttpRequest();
    loader.open("GET", "JSON/petfood.json");
    loader.send(); 
    loader.addEventListener("load", function(){
        const dogfood = JSON.parse(event.target.responseText);
        callback(dogfood);
       
        
    });
};

