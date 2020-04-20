const fs = require('fs')

let writeFileAsynchronously = () => {

    let fileData = 'this function lets us to write content in to the file asynchronously';
    fs.writeFile('writeFile.txt', fileData, (err)=> {
        if(err){
            conslole.log(err)
        }else{
            console.log(`the data is written to file`)
        }
    })

}

let writeFileSynchronously = () => {

    let fileData = `this data is put in to the write text file synchronously`

    console.log('file writing started');
    fs.eriteFileSync('writeFile.txt', fileData)
    console.log('File Writing ended')

}

module.exports = {
    writeFileAsynchronously: writeFileAsynchronously,
    writeFileSynchronously: writeFileSynchronously
}