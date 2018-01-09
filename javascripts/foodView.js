"use strict";
const $ = require("jquery");
const _startcase = require("lodash.startcase");
const foodFactory = require("./jsonData");
const food = require("./food");


module.exports.displayFood = (dogData) => {
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
    };

