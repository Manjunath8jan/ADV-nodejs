const fs = require('fs')

let readFileSynchronously = () => {

    let variableContainsFileData = fs.readFileSync('example.txt')
    console.log('This is file buffer')
    console.log(variableContainsFileData)

    let variableContainsEncodedFileData = fs.readFileSync('example.txt','utf-8')
    console.log('this is file buffer')
    console.log(variableContainsEncodedFileData)

}

let readFileAsynchronously = () => {

    console.log('file reading started')
    let variableContainsFileData = fs.readFile('example.txt')
    console.log(variableContainsFileData)
    
    fs.readFile('example.txt','utf-8', (err, fileData)=> {
        if(err){
            console.log('some error occurred while reading the file')
            console.log(err)
        }else {
            console.log('file data read successfully')
            console.log(filedata)
        }
        
    })

}

let readDirectorySynchronously = () => {
    let variableContainsDirectoryData = fs.readdirSync('exampleDir')
    console.log(`this is the file list : ${variableContainsDirectoryData}`)
}

let readDirectoryAsynchronously = () => {

    fs.readdir('exampleDir', (err, file) => {
        if(err){
            console.log(err)
        }else {
            console.log(file)
        }
    })

}

module.exports = {
    readFileSynchronously: readFileSynchronously,
    readFileAsynchronously: readFileAsynchronously,
    readDirectoryAsynchronously: readDirectoryAsynchronously,
    readDirectorySynchronously:readDirectorySynchronously
}