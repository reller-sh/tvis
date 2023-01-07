const fs = require('fs');
const net = require('net');


import fp from 'lodash/fp'


// const argv = fp.toString(fp.find(fp.startsWith('--ary='), process.argv))
// const aVal = JSON.parse(fp.replace('--ary=', '', argv))




fs.open('/tmp/test', fs.constants.O_RDONLY | fs.constants.O_NONBLOCK, (err: any, fd: any) => {
    // Handle err
    const pipe = new net.Socket({ fd });
    // Now `pipe` is a stream that can be used for reading from the FIFO.
    pipe.on('data', (data: any) => {
        // console.log(data.toString())
        console.log(fp.orderBy(fp.toNumber, ['asc'], JSON.parse(data)))

    });
});



