/*write a statment to import the file */
var fs=require('fs');
/*declare a variable and  takes custom input and count the number of lines in that file*/ 
let buf=fs.readFileSync(process.argv[2]).toString().split('\n').length;
/*write a statement to print count*/
console.log(buf-1);