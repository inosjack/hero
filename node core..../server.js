const http = require("http");
//holding capability of network....

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Bye') // this is end of stream.....
})
// res has lot of method... collection of method... stream coming.....
// req has lot of properties...

const port = 4000;

server.listen(port, () => {
    console.log(`Server is running`)
})

// libuv | Cross platform

// Guides 

// Anatomy of an HTTP Transaction..

// EventEmitter..  Streams ....

// how many port available in computer...

// node js not have networking interface or network card...

// libuv interface and your node js

// req come up with stream of data / bytes of data

// http convert bytes to string.. 

// when req come in it has two block one is req(in) {} and res(out) {}

// req request is instance of IncomingMessage https://nodejs.org/api/http.html#http_class_http_incomingmessage

// in that we incoming properties 

// other hand major compressive method...

// EventEmitter through 

// libuv find of out properties node create or pass req and req to js execute this 

// node take req and res object and take them directly to js // they inject req and res to js


/**
 * res comes into the server => it converted in byes in libuv => track all req props which is coming in
 * then it crafting object from this .. also emit events node find equivalent function stream response back
 * transmit to user...
 * 
 * js doing nothing... 
 * 
 * majorly things are handle libuv and hard work done by node js
 **/


// interface filesystem http lib....


// response object is a writable stream... 

// end