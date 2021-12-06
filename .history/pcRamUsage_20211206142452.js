const os = require('os');

const tRam= totalmem()/1024 /1024;
const fRam= freemem()/1024 /1024;


const{arch , platform, totalmem, freemem} = os;
const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: tRam,
    FreeRAM: fRam,
}

console.log(stats);
