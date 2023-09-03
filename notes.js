const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return('they are very ......')
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title===title) //to check if there is a duplicate note and save it in a duplicateNotes array)
    if(duplicateNotes.length === 0){  //if duplicatesNotes array is 0, i.e no duplicates
        // console.log(notes)
        notes.push({
        title:title,
        body:body
    })
        saveNotes(notes)
        console.log('new notes added')
    }else{
        console.log('note title already taken')
    }
    
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title) //to save only those that is not duplicated by title that we have entered in a noteToKeep array
    

    if(notes.length > notesToKeep.length) {  //That means both titles were a match and notesToKeep Array did not exist
        console.log(chalk.green.inverse('Notes removed!!'))
    }else{
        console.log(chalk.red.inverse('No Notes removed!!'))
    }

    saveNotes(notesToKeep) 

    
    //alternatively

    // if(notesToKeep.length != 0){ // Both titles were not a match and hence notetoKeep Array is the same as the original notes array
    //     console.log(chalk.red('No notes removed!!'))
    // }else{ 
    //     console.log(chalk.green('Notes removed!!'))
    // }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('My notes!!!'))
    notes.forEach((noteList) => console.log(chalk.green(noteList.title)))
}

const readNotes = (title) => {
    const notes = loadNotes()
    const findNotes = notes.find((note) => note.title === title)
    if(findNotes){
        console.log(findNotes.title)
        console.log(findNotes.body)
    }else{
        console.log('No note found')
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')  //reading a prexisiting json file
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    }catch(e) {
        return []
    }
}



module.exports= {  //exporting more than function to app.js
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}