"use strict";
const $ = require("jquery");
const _startcase = require("lodash.startcase");




module.exports.displayFood = (dogData) => {
    let $output = $("#output");
    
    dogData.forEach( (brand) => {
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
    };

  module.exports.displayCatFood = (catData) =>{
    
        let $output = $("#output");
        catData.forEach( (brand) => {
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
    };