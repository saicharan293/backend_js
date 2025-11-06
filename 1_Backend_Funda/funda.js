// js

// ForEach ni use cheyatam valla, new array aithe create avvadu, existing values ni use chesukovachu
// var arr = [ 1, 2, 3, 4];
// arr.forEach(function(val){
//     console.log(val+" hello");
    
// });


// Map: map ni use cheste, adi kottha array ni create chesi istadi, 
// kani aa kottha array ni return cheyali

// var arr = [ 1, 2, 3, 4];
// var newarr =arr.map(function(val){
//     return 13;
// })

// console.table(newarr)

// Filter: array lo unna items paina edaina operations cheyali ante Filter ni use cheyali
// var arr = [1, 2, 3, 4];

// var newArr = arr.filter(function(val){
//     if(val>2) {return true}
// })

// console.log(newArr);

// Find: oka array lo edaina condition base paina satisfy ayye First Value ni return cheyali ante,
//  find ni use chestamu.

// var arr = [1, 2, 3 ,4];
// var item = arr.find(function(val){
//     if(val>1) return val;
// })

// console.log(item); // returns only the first value

// indexOf: oka array lo oka element unda leda anedi kanukkotaniki indexOf
var arr = [1, 2, 3, 4]
var first = arr.indexOf(5);
console.log(first);

//-------------------------------------------------------------------------------------------------

// Back story: Js ni use chesi backend ni create cheyalemu, endukante Js daggara backend ni run cheyagala
// functionalities levu, "Ryan Dahl" Js ni use chesi backend ni create cheyali anukunnadu.
// 
//Node js: Node js ante Js runtime environment, V8 engine and Js combo tho ne
//  javascript server ni create/run cheyagalamu
// Node = Js wrapper + v8 engine .... combo

// Note: Node run ayyentha varaku, Js backend run avtu untadi.
//  ( Js ni use chesi, server create chese chance istadi)