/** this program is exported to makeitmodule  */
/** import the file and path*/
const fs=require('fs')
const path=require('path')
/** and make this funtcion export and pass the directory,filterstring ,call back as arguments to the  function */
module.exports=function(dir,filterStr,callback) {
    /* function for filtering the directory*/
    fs.readdir(dir, function(err,list){
        if(err){
            return callback(err)
        }
        list=list.filter(function (file){
            return path.extname(file)=== '.' + filterStr
        })
      callback(null, list)
    })
  }