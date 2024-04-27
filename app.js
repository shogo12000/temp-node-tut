// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <packageName>


//https://www.youtube.com/watch?v=Oe421EPjeBE&t=26485s
//1:50

//npm init - create the package json

const http = require('http');



const server = http.createServer((req, res)=>{    
    console.log(req.url)

    res.write('Hello word3')    
    
    res.end('Hello, World!\n');
});



server.listen(5000)