var fs = require('fs');
/**write a file system operation to read the directory and assign to a variable */
var buffer = fs.readdir(process.argv[2],function(err,list){
/** method for finding the list of files in directory */
    var len = list.length;
    /** takes an  custom input for the extension of file */
    var ext = process.argv[3];
    /** by using for loop count the mnumber of files in directory */
    for(var i=0;i<len;i++){
        if(list[i].indexOf('.'+ext)!=-1)
            console.log(list[i]);
    }
});