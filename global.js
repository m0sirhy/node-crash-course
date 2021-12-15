//Global object have a lot properties and method can be useful
// you dont have to explicity call global to use any method or property

//console.log(global);

// global.setTimeout(()=>{
// console.log('inside time out');
// },2000);

// OR

setTimeout(()=>{
    console.log('inside time out');
    clearInterval(int);
    },4000);

const int =global.setInterval(()=>{
console.log('inside interval');
},1000);



// dirname & filename properties

//get absolute path to the current folder
console.log(__dirname);
//get absolute path to the current folder with file name
console.log(__filename);
