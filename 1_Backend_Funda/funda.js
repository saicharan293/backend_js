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
