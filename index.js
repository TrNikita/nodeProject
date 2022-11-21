const yargs = require('yargs');
const pkg = require('./package.json');
yargs.version(pkg.version);

const {addNote, removeNote, printNotes} = require('./notes.controller');

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'note title',
            demandOption: true,
        },
    },
    handler({title}) {
        addNote(title);
    },
});

yargs.command({
    command: 'remove',
    describe: 'Remove note by id',
    builder: {
        id: {
            type: 'string',
            describe: 'note id',
            demandOption: true,
        },
    },
    handler({id}) {
        removeNote(id);
    },
});

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    async handler() {
        printNotes();
    },
});

yargs.parse();
