// Modules is efficient simple and easy way to split our code into multiple files & import || export it
// * more modular reusable & easy to maintain

const x = require('./cars');
console.log(x);
console.log(x.cars ,x.colors);


// extracting  specific constant
const {colors, cars} = require('./cars');
console.log(cars ,colors);

//built in module 
const os=require('os');
//get info about platform that we run on it 
console.log(os.platform(),'\n',os.release());