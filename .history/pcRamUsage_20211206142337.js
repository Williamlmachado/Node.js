const os = require('os');

const tRAM=

const{arch , platform, totalmem, freemem} = os;
const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: totalmem(),
    FreeRAM: freemem(),
}

console.log(stats);
