const fs =require('fs');

//reading filese
// fs.readFile('./docs/blog1.txt', () => {
//     if(err); {
//     console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// writing files, 
// fs.writeFile('./docs/blog2.txt', 'hello world', () => {
//     console.log('file written');
// });
if(fs.existsSync('./assets')){
fs.mkdir('.assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});
else{
    fs.rmdir('./assets', (err) => {

    if(err){
        console.log(err)
    }
    console.log('folder deleted');
    })
}

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink(./docs/deleteme.txt, (err) => (err) {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
        

    })
}