var fs=require('fs');
/*use file system operation readFile to read the file*/
let buf=fs.readFile(process.argv[2],'utf8',function(err,data){
    /** write a method to find the new lines in the file and assign to var  */
    var len=data.split('\n').length;
/**write a statement to print the count of new lines in the file */
console.log(len-1);
});