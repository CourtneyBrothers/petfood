"use strict";

// require("./food");
const $ = require("jquery");
const _startcase = require("lodash.startcase");



module.exports.dogfoodData = () => {
    return new Promise((resolve,reject) => {
    $.ajax({
        url: "../JSON/petfood.json"

    }).done( (dogData)=> {
        resolve(dogData);
    }).fail((error)=>{
        reject(error.statusText);
    });
    });
};

module.exports.catfoodData = () =>{ 
    return new Promise((resolve,reject)=>{
    $.ajax({
        url: "../JSON/petfood2.json"

    }).done( (catData)=> {
        resolve(catData);
    }).fail((error)=>{
        console.log("error", error.statusText);
    });
    });

};

// module.exports.dogfoodData = function(callback){
//     const loader = new XMLHttpRequest();
//     loader.open("GET", "JSON/petfood.json");
//     loader.send(); 
//     loader.addEventListener("load", function(){
//         const dogfood = JSON.parse(event.target.responseText);
//         callback(dogfood);
       
        
//     });
// };

