


"use strict";
/*jslint sub: true */
const foodFactory = require("./jsonData");
const foodView = require("./foodView");


foodFactory.dogfoodData().then((dogData)=>{
    console.log("dogData", dogData);
    foodView.displayFood(dogData);
});

foodFactory.catfoodData();


