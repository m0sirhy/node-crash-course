/* 
node js is different from php here you dont have apache to serve you
 you will write your own server to handle requests and responses
 */

const http=require('http');

const serve=http.createServer((req,res)=>{
//will run every time a request come to the server
    console.log('request made');
});

serve.listen(3000,'localhost',()=>{
console.log('listening for requests on port 3000 ');
});