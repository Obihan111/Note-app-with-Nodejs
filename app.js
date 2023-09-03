//fs.writefilesync is for synchronous, while fs.writefile is for asynchronous
const yargs = require('yargs')
//const {removeNotes,addNotes,listNotes, readNotes} = require('./notes') //destructured

const ImportedNotes = require('./notes') //undestructed version


// yargs.command({   //destructured version
//     command:'add',
//     builder:{
//         title:{
//             describe: 'This is the names of all the products',
//             demandOption:true
//         },
//         body:{
//             describe:'This is the body',
//             type:'string',
//             demandOption:true
//         }
//     },
//     describe:'add a new note',
//     handler: (argv) => {
//         addNotes(argv.title, argv.body) //loading the addNotes function
//         // console.log('Title:', argv.title)
//         // console.log('body:', argv.body)
//     }
// })

// yargs.command({
//     command:'remove',
//     describe:'removing new note',
//     builder:{
//         title:{
//             describe: 'remove note',
//             demandOption:true
//         }
//     },
//     handler:(argv) => {
//         //console.log('new note has been removed.',argv.title)
//         removeNotes(argv.title)
//     }
// })

// yargs.command({
//     command:'list',
//     describe:'list new note',
//     builder:{
//         title:{
//             describe:'Listing Note'
//         }
//     },
//     handler:(argv) => {
//         listNotes()
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'reading new note',
//     builder:{
//         title:{
//             describe:'This is read'
//         }
//     },
//     handler:(argv) => {
//        readNotes(argv.title)
//         //console.log('new note will be read')
//     }
// })


// yargs.parse() 
// //console.log(yargs.argv) it prints the command twice.


yargs.command({   //undestructured version
    command:'add',
    builder:{
        title:{
            describe: 'This is the names of all the products',
            demandOption:true
        },
        body:{
            describe:'This is the body',
            type:'string',
            demandOption:true
        }
    },
    describe:'add a new note',
    handler: (argv) => {
        ImportedNotes.addNotes(argv.title, argv.body) //loading the addNotes function
        // console.log('Title:', argv.title)
        // console.log('body:', argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'removing new note',
    builder:{
        title:{
            describe: 'remove note',
            demandOption:true
        }
    },
    handler:(argv) => {
        //console.log('new note has been removed.',argv.title)
        ImportedNotes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list new note',
    builder:{
        title:{
            describe:'Listing Note'
        }
    },
    handler:(argv) => {
        listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'reading new note',
    builder:{
        title:{
            describe:'This is read'
        }
    },
    handler:(argv) => {
       ImportedNotes.readNotes(argv.title)
        //console.log('new note will be read')
    }
})


yargs.parse() 
//console.log(yargs.argv) it prints the command twice.