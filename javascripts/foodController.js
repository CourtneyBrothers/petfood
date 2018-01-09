
"use strict";

const foodFactory = require("./jsonData");
const foodView = require("./foodView");

module.exports.foodController= () => {
foodFactory.dogfoodData().then((dogData)=>{
    console.log("dogData", dogData);
    foodView.displayFood(dogData.dog_brands);
});

module.exports.catFoodController= () => {
    foodFactory.catfoodData().then((catData)=>{
        foodView.displayCatFood(catData.cat_brands);
    });
    };
};