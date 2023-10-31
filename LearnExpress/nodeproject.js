const { dir } = require('console');
var files=require('fs');
var fdesc=0

//open(<name of the file>,<mode of opening>,<call-back-function>)   r - read mode , w - write mode , a - append mode , 
files.open('Demo.txt','w',function(err,fd){            //Opens the file in write mode.
    if(err !=undefined){
    console.log(err.message);
    console.log(err.code);
    }else{
        console.log('File opened successfully.');
        console.log(fd);  //file discriptor
        fdesc=fd;
    }

var str=new Buffer.from('Welcome to NodeJS ');
console.log(fdesc);

//Write ( write(fileNo),<data to be written>,<Starting position IN buffer>,<size>,<Encoding | null>,<call-back Function>)
files.write(fdesc,str,0, str.length,null, function(err,written){
    console.log('Wrote' +written+'characters to the file');
})
files.close(fdesc, function(){
    console.log('File closed successfully.')
});
});