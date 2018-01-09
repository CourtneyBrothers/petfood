"use strict";

// require("./food");
const $ = require("jquery");
const _startcase = require("lodash.startcase");


module.exports.dogfoodData = () =>{

    $.ajax({
        url: "../JSON/petfood.json"

    }).done( (dogData)=> {
        let $output = $("#output");
        console.log("Ajax done",dogData,"dogData brands",dogData.dog_brands);
        dogData.dog_brands.forEach( (brand) => {
            //loop through brands
            $output.append(`<h3>${_startcase(brand.name)}</h3>`);
            //loop through types
                brand.types.forEach( (brandType) => {
                    $output.append(`<h4>${_startcase(brandType.type)}</h4>`);
                //loop through brandType's volumes array
                        brandType.volumes.forEach((vol) =>{
                            $output.append(`<h5>Size: ${vol.name}  Price: $${vol.price} </h5>`);
                        });

                });
        });
    }).fail((error)=>{
        console.log("error", error.statusText);
    });
};
module.exports.catfoodData = () =>{ 
    $.ajax({
        url: "../JSON/petfood2.json"

    }).done( (catData)=> {
        let $output = $("#output");
        console.log("Ajax done",catData,"catData brands",catData.cat_brands);
        catData.cat_brands.forEach( (brand) => {
            //loop through brands
            $output.append(`<h3>${brand.name}</h3>`);
            $output.append(`<h4> breeds: ${brand.breeds} , </h4>`);
            //loop through types
                brand.types.forEach( (brandType) => {
                    $output.append(`<h4>${_startcase(brandType.type)}</h4>`);
                //loop through brandType's volumes array
                        brandType.volumes.forEach((vol) =>{
                            $output.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5> `);
                        });

                });
        });
    }).fail((error)=>{
        console.log("error", error.statusText);
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

