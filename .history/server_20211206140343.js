const http = require('http');
const host = 
http.createServer((req,res)=>{
    res.write('<h1>Working</h1>')}).listen(3000, () => console.log("Server is running"));
