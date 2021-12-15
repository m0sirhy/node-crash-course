const fs = require('fs');

const ReadStream = fs.createReadStream('./docs/text-2.txt', { encoding: 'utf-8' });
const WriteStream=fs.createWriteStream('./docs/text-3.txt');
ReadStream.on('data', (chunk) => {

    console.log('************* NEW CHUNK ****************');
    console.log(chunk);
    WriteStream.write('\n New Chunk for New Stream \n');
    WriteStream.write(chunk);

    // you could used it instead of encoding specification to make readable data 
    //  console.log(chunk.toString());
});

//piping when we passing data directly from readable to writable streams 
//"same as above"
ReadStream.pipe(WriteStream);