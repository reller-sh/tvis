import {appendFileSync} from "fs";
import {execFile} from 'node:child_process';


const {mkfifoSync} = require('named-pipe');

const path = '/tmp/test';


export const lab6 = () => {

    try {
        mkfifoSync(path, 777);

    } catch (e) {
        console.log('create error!')

    }
    console.log('Start spam')

    execFile('/home/rest/.nvm/versions/node/v16.15.0/bin/node', ['mid/lab1/index.js'], (error, stdout) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });

    appendFileSync.bind(null, path, JSON.stringify([1, 4, 8, 99, 50]))()
}
