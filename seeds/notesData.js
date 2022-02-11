const { Notes } = require('../models');

const notesData = [
    {
        "title": "VS Code Shortcuts",
        "description": "Cmnd+D allows you to select the next occurence of the word you have selected. Opt+Shift+F lets you autoformat your file"
    },
    {
        "title": "HTML/CSS Reminders",
        "description": "Remember to SAVE! in HTML, the link to the stylesheet goes in the head. To select all elements in a page while in CSS, use the *."
    },
    {
        "title": "Javascript Reminders",
        "description": "Opt+Shift+F lets you autoformat your file. Variables saved under var can be reassigned but the ones under const cannot."
    },
    {
        "title": "JS Datatypes",
        "description": "'This is a string' ['This', 'is', 'an', 'array']"
    },
]
const seedNotes = () => Notes.bulkCreate(notesData);

module.exports = seedNotes;