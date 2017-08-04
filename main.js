
var fs = require("fs");

var inquirer = require("inquirer");
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");    
    console.log(firstPresident.front);
    console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
    console.log(firstPresidentCloze.cloze);
    console.log(firstPresidentCloze.partial);
    console.log(firstPresidentCloze.fullText); 
    
var errorCloze = new ClozeCard(
    "Abraham Lincoln is famous for the Gettysburg Address.", "banana");





