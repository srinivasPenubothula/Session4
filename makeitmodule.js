/*this file imports the  function form the mymodule file by using require */
/** and take custom input for directory,  */ 
const mymodule= require('./mymodule.js')
const dir=process.argv[2];
const filterStr=process.argv[3];
 mymodule(dir,filterStr,function(err,list){
 if(err){
     return console.error("There was an error:", err)
 }
 list.forEach(function(file)
 {
     console.log(file)
 })
 })