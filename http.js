/** require the http and take  varible url from custom input  */
var http = require('http');
var url = process.argv[2];
/** function for getting link  and pass http,url as arguments */
http.get(url,function(response){
    response.setEncoding('utf8');
    
    response.on('data',function(data){
        console.log(data);
    });
    
    response.on('error', console.error);
    
});