const fs = require('fs');


// writeFile(): file create chesi, andulo data ni add cheyatam
// fs.writeFile("hey.txt","Example for using file", function(err){
//     if(err) console.error(err);
//     console.log("done");
// })
//-------------------------------------------


// appendFile: existing file lo existing data ki additional/new data ni append cheyatam
// fs.appendFile("hey.txt", "\nmei tho thik hu", function(err){
//     if(err) console.log(err);
//     console.log("added");
// })
//-----------------------------------------

// rename: existing file name ni rename cheyali ante ee function ni use cheyali

// fs.rename("hey.txt","kothaPeru.txt",function(err){
//     if(err) console.error(err);
//     console.log("rename chesanu");
// })

// ------------------------------------------------

// copyFile: oka file lo unna context/data ni vere exiting/new file lo copy cheyataniki

// fs.copyFile("kothaPeru.txt","./copy/sarikotthaFile.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("copy kottesavv ga bro")
// })


//--------------------------------------------------------

// unlink("path", callback()): oka file ni delete cheyali ante, unlink ni use cheyali

// fs.unlink("./copy/sarikotthaFil.txt", function(err){
//     if(err) console.error(err);
//     else console.log("file delete chesanu")
// })

//--------------------------------------------------------------


// rmdir(): , rm(): (+plus recursive: true): oka folder ni along with its files ni delete cheyataniki

// fs.rmdir("./copy",{recursive: true}, function(err){
//     if(err) console.error(err.message);
//     else console.log("folder ne delete chesesa")
// })

//---------------------------

// mkdir(): ee method ni use chesi, folder ni create cheyachu

// fs.mkdir("./Creation", (err)=>{
//     if(err) console.error(err.message);
//     else console.log("Kottha folder create chesanu")
// })

//--------------------------------------------------------

// readdir("path", callback(err, files)): Oka folder lo unna files yokka list kavali ante

// fs.copyFile("kothaPeru.txt", "./Creation/malliCreatechey.txt", (err)=>console.error(err));
// fs.readdir("./Creation", (err, files)=>{
//     if(err) console.error(err.message);
//     else console.log("directory contents: ", files)
// })

// --------------------------------------------------------------

// readFile("path","utf8" callback(err, data)): oka file unna data ni read cheyali ante
// "utf8" ni kuda include cheyali

// fs.readFile("./Creation/malliCreatechey.txt", "utf8", (err, data)=>{
//     if(err) console.error(err.message);
//     else console.log("file unna data enti ante: \n",data)
// })

//------------------------ End of basics of "File" module -------------------