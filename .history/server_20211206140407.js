const http = require('http');
const host = "http://localhost";
const port = 3000;
http.createServer((req,res)=>{
    res.write('<h1>Working</h1>')}).listen(3000, () => console.log("Server is running"));
