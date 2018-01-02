"use strict";

module.exports.dogfood =() => {
    const dogfoodReq = new XMLHttpRequest();
    dogfoodReq.addEventListener("load", parseDogFood);
    dogfoodReq.open("GET", "petfood.json");
    dogfoodReq.send(); 
};

const parseDogFood = () => {
    const dogfood = JSON.parse(event.target.responseText);
    for (let i = 0; i < dogfood.length; i++) {
        let arrayWithJson = messageController.addNewMessage(dogfood[i]); 
        output.updateDom(arrayWithJson);
    }      
};