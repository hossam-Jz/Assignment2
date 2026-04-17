const path = require("node:path");
const fs = require("node:fs");
const { log } = require("node:console");


// function logPathInfo() {
//   console.log({
//     File: __filename,
//     Dir: __dirname
//   });
// }
// logPathInfo(); (1)


// function basename(data){
//    return path.basename(data,(err)=> console.log(err));
// }  (2)


// function createPath(data){
//     return path.format(data,(err)=> console.log(err));
// } (3)


// function extension(data){
//   return  path.extname(data,(err)=> console.log(err));
// } (4)


// function parsePath(data){
//     return path.parse(data,(error)=> console.log(error));
// } (5)


// function isabsolute(data){
//     return path.isAbsolute(data,(err)=> console.log(err));
// } (6)


// function joinPath(...data){
//     return path.join(...data);
// } (7)


    // function resolvePath(data){
    //     return path.resolve(data);
    // } (8)


    // function joinTwoPath(...data){
    //     return path.join(...data);
    // } (9)

    
    // function DeleteFile(data){
    //      fs.unlink(data,(err)=>{
    //         if(err){
    //             console.log(err);
    //             return
    //         }
    //             console.log("File Deleted Successfully");
    //      })
    // } (10)

    

    // const createSync = function(data){
    //     try{
    //          fs.mkdirSync(data);
    //     }
    //     catch(err){
    //         console.error(err);
    //     }
    // } (11)


        // const EventEmitter = require("events");
        
        // const emitter = new EventEmitter();
        
        // emitter.on("stat",()=>{
        //     log("welcom event triggered!");
        // })
        
        // emitter.emit("stat"); (12)



// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("login",(custom)=>{
//     log(`user logged in : ${custom}`);
// })
// emitter.emit("login","Ahmed"); (13)



    // const readesync = function(data){
    //     try{
    //       return  fs.readFileSync(data,"utf-8");
    //     }
    //     catch(err){
    //         console.error(err);
    //     }
    // } (14)
    

    // function writeFile(filename,data){
    //  return   fs.writeFile(filename,data,(err)=>console.log(err));
    // } (15)

//  const ext =  fs.existsSync("Jz.txt"); (16)

// const os = require('os');

// function getSystemInfo() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch()
//   };
// }

// console.log(getSystemInfo()); (17)

