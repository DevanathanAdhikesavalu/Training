var files = require('fs');
const { cwd } = require('process');

files.writeFile('Demo1.txt','NodeJs is asynchronous.Supports callbacks',

function(error,data){
    if(error != undefined){
        console.log(error.message);
    }
    else
        console.log('Write'+data+'to the file..')
})

files.readFile('Demo1.txt','utf-8',function(error,data){
    if(error != undefined){
        console.log(error.message);
    }
    else
        console.log(data);
})
