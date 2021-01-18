const fs = require('fs');
const path = require('path');

//DELETE a note
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  }

//creates note and pushes to array
function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
} 

  module.exports = {
      findById,
      createNewNote

  };