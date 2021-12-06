const http = require('http');
http.createServer((req,res)=>{
    res._write('<h1>Working</h1>')}.listen(3000, () => console.log("Server is running"));
