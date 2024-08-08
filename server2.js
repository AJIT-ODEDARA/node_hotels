//  NEW HOW TO USE OS AND FS MODULE OF NODE.JS

// var fs =require('fs');
// var os = require('os');

// var user = os.userInfo();

// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','hi '+ user.username + '\n' ,()=>
// {
//     console.log("file is created");
// })

//  NEW HOW TO IMPORT OTHR FILE TO SECOND FILE

// var node = require("./node.js");

// console.log("this is server file calling.....");

// // how to acces other file variable first export on this file
// var nameofnodefile = node.name;
// console.log(nameofnodefile);

// // USE OD LODASH PACAGE

// var _ = require("lodash");

// console.log(_.isString("String or not")); //returns true of faulse

// var data = [1, 2, 4, 5, 1, 3, 8, 10, 11];

// var filter = _.uniq(data);//use uniq operation to return arr of uniq elements
// console.log(filter);