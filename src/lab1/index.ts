const fs = require('fs');
const net = require('net');


import fp from 'lodash/fp'


// const argv = fp.toString(fp.find(fp.startsWith('--ary='), process.argv))
// const aVal = JSON.parse(fp.replace('--ary=', '', argv))




fs.open('/tmp/test', fs.constants.O_RDONLY | fs.constants.O_NONBLOCK, (err: any, fd: any) => {

    const pipe = new net.Socket({ fd });

    pipe.on('data', (data: any) => {
        console.log(fp.orderBy(fp.toNumber, ['asc'], JSON.parse(data)))
    });
});



